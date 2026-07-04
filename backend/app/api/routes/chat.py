from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import List, Optional
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
import asyncio

router = APIRouter()

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]
    
SYSTEM_PROMPT = """You are HealthGuard AI, a highly advanced Public Health Assistant.
Your primary role is to provide disease awareness, outbreak intelligence, and symptom education.
WARNING: YOU ARE NOT A DOCTOR. YOU CANNOT DIAGNOSE.
Always include a medical disclaimer in your responses.
Provide your answers in markdown. Use tables where helpful."""

async def generate_chat_response(messages: List[ChatMessage]):
    # Setup LLM - Ensure OPENAI_API_KEY is in environment
    try:
        llm = ChatOpenAI(model="gpt-4-turbo-preview", temperature=0.7, streaming=True)
    except Exception as e:
        yield f"Error initializing AI: {str(e)}"
        return

    langchain_messages = [SystemMessage(content=SYSTEM_PROMPT)]
    
    for msg in messages:
        if msg.role == "user":
            langchain_messages.append(HumanMessage(content=msg.content))
        elif msg.role == "assistant":
            langchain_messages.append(AIMessage(content=msg.content))
            
    try:
        async for chunk in llm.astream(langchain_messages):
            if chunk.content:
                yield chunk.content
    except Exception as e:
        yield f"\n\n**Error:** An issue occurred during response generation. ({str(e)})"

@router.post("/stream")
async def chat_stream(request: ChatRequest):
    """
    Streaming chat endpoint for HealthGuard AI.
    """
    return StreamingResponse(
        generate_chat_response(request.messages), 
        media_type="text/event-stream"
    )

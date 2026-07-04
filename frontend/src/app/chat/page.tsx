"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Activity, Send, User } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatPage() {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: "assistant", content: "Hello! I am HealthGuard AI. I can help you understand symptoms, check for outbreaks, and provide general health awareness. How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
    
    // Simulate AI typing for UI demo
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: "**Disclaimer:** I am an AI, not a doctor. Based on your query, here is some educational information..." }]);
    }, 1000);
  };
  
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex h-16 items-center px-6 bg-white border-b border-border shadow-sm shrink-0">
        <div className="flex items-center gap-2 text-primary">
          <Activity size={24} />
          <span className="font-bold text-xl">HealthGuard Chat</span>
        </div>
      </header>
      
      <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {messages.map((msg, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={i} 
            className={`flex gap-4 max-w-3xl mx-auto ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-secondary text-secondary-foreground" : "bg-primary text-white"}`}>
              {msg.role === "user" ? <User size={20} /> : <Activity size={20} />}
            </div>
            <div className={`p-4 rounded-2xl ${msg.role === "user" ? "bg-primary text-white rounded-tr-none" : "bg-muted text-foreground rounded-tl-none"} shadow-sm`}>
              {msg.content}
            </div>
          </motion.div>
        ))}
      </main>
      
      <footer className="p-4 bg-white border-t border-border shrink-0">
        <form onSubmit={sendMessage} className="max-w-3xl mx-auto relative flex items-center">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about symptoms, diseases, or prevention..." 
            className="w-full h-14 pl-6 pr-16 rounded-full border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <Button type="submit" size="icon" className="absolute right-2 h-10 w-10 rounded-full bg-primary hover:bg-primary/90 text-white">
            <Send size={18} />
          </Button>
        </form>
        <p className="text-center text-xs text-muted-foreground mt-3">HealthGuard AI can make mistakes. Always verify with a healthcare professional.</p>
      </footer>
    </div>
  );
}

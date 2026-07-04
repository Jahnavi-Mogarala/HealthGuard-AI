<div align="center">
  
# HealthGuard AI 🧬

**Know Early. Stay Safe. Save Lives.**

A production-grade, highly scalable public health platform that unifies outbreak intelligence, emergency response, and verified health education into a single ecosystem.

[![Tech Stack](https://skillicons.dev/icons?i=nextjs,react,tailwind,python,fastapi,postgres,redis,docker,githubactions)](https://skillicons.dev)

</div>

<br/>

## 🌟 Overview
HealthGuard AI is a comprehensive digital health portal designed to bridge the gap between citizens, verified medical information, and government outbreak data. It provides real-time disease tracking, an AI-powered educational symptom checker, and immediate emergency routing.

**Core Directive**: The platform strictly provides *educational awareness* and is architected to prevent medical hallucinations or unauthorized diagnoses.

---

## 🚀 Key Modules

### 🏥 Core Platform
* **AI Chatbot (`/chat`)**: Real-time conversational agent powered by LangChain and GPT-4, constrained by strict medical guardrails.
* **Outbreak Intelligence (`/map`)**: Interactive geospatial dashboards for tracking local disease vectors and heatmaps.
* **Emergency SOS (`/emergency`)**: High-contrast, rapid-response interface for critical scenarios and first-aid routing.
* **Citizen Dashboard (`/dashboard`)**: Unified portal with personalized health scores, local proximity alerts, and daily health tips.

### ⚕️ Smart Utilities
* **Visual Symptom Checker (`/image-checker`)**: Image analysis pipeline for educational assessment of dermatological conditions.
* **Voice Assistant (`/voice`)**: Multilingual speech-to-text interface with reactive UI wave animations.
* **Medication Tracker (`/medicines`)**: Prescription scheduling and medication reminders.
* **Diagnostic Flow (`/symptom-checker`)**: Step-by-step interactive algorithmic symptom questionnaire.

### 📚 Community & Learning
* **Health Learning Center (`/learn`)**: Gamified educational hub featuring verified articles, quizzes, and XP tracking.
* **Diseases Database (`/diseases`)**: Searchable index of communicable and lifestyle conditions.
* **Community Forum (`/community`)**: Anonymous Q&A validated exclusively by verified medical professionals.
* **News Digest (`/news`)**: Real-time aggregation of public health advisories and medical breakthroughs.

### ⚙️ Identity & Services
* **Health Identity (`/profile`)**: Universal Smart Health ID (QR Code integrated) and family profile management.
* **Vaccine Tracking (`/vaccines`)**: Immunization logs and nearby center discovery linked to government schemes.
* **Nearby Services (`/services`)**: Geolocation directory for Hospitals, Pharmacies, and Blood Banks.
* **Admin Telemetry (`/admin`)**: Real-time analytics dashboard tracking DAU, API health, and system loads.
* **Accessibility (`/settings`)**: High Contrast, Elderly mode, Child mode, and PWA Offline Sync toggles.

---

## 🛠️ System Architecture

### Frontend (Client)
* **Framework**: Next.js 15 (App Router) & React 19
* **Styling**: Tailwind CSS v4 (Custom Medical `oklch` Theme)
* **Animations**: Framer Motion
* **Components**: Radix UI / Shadcn primitives + Lucide Icons
* **PWA**: Configured for offline caching and mobile installation

### Backend (Microservices)
* **Core API**: FastAPI (High-performance asynchronous Python framework)
* **Primary Database**: PostgreSQL (Relational data modeled via SQLAlchemy)
* **Caching & Queues**: Redis (Rate limiting and session states)
* **Vector Store**: Qdrant (Retrieval-Augmented Generation context)
* **AI Orchestration**: LangChain

### DevOps & Infrastructure
* **Containerization**: Docker & Docker Compose (Multi-container orchestration)
* **CI/CD Pipeline**: GitHub Actions (Automated testing and build verification)

---

## 💻 Local Deployment

### 1. Unified Environment (Recommended)
The entire ecosystem (Databases, Cache, Vector Store, Backend API, and Frontend) is containerized.
```bash
git clone https://github.com/Jahnavi-Mogarala/HealthGuard-AI.git
cd "HealthGuard AI"
docker-compose up --build
```
* **Frontend UI**: `http://localhost:3000`
* **Backend API Docs**: `http://localhost:8000/docs`

### 2. Manual Development Setup
If you need to run services independently for debugging:

**Backend Setup:**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend Setup:**
```bash
cd frontend
npm install
npm run dev
```

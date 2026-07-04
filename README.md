# HealthGuard AI 🧬 

> **Know Early. Stay Safe. Save Lives.**

An AI-Driven Public Health Assistant for Disease Awareness & Community Safety, built as a production-quality full-stack web application for the **Smart India Hackathon**.

![HealthGuard Banner](https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000&h=600)

## 🌟 Overview
HealthGuard AI is a comprehensive, multilingual platform merging the best concepts of Apollo 24/7, WHO Dashboards, and ChatGPT. It serves as an interactive government-style health portal offering verified outbreak intelligence, emergency guidance, and AI-driven symptom awareness.

**Disclaimer**: This platform provides *educational awareness only* and is heavily prompted to prevent medical hallucinations or diagnoses.

---

## 🔗 Repository Details
**GitHub Repository**: [Jahnavi-Mogarala/HealthGuard-AI](https://github.com/Jahnavi-Mogarala/HealthGuard-AI)

*(Ensure you clone from the `main` branch to access all features).*

---

## 🚀 Key Features Built

### 🏥 Core Platform
* **AI Chatbot (`/chat`)**: Real-time streaming conversational agent powered by LangChain.
* **Outbreak Intelligence (`/map`)**: Heatmap dashboards for live tracking of local diseases.
* **Emergency SOS (`/emergency`)**: High-contrast, one-click immediate action center for critical scenarios.
* **Interactive Dashboard (`/dashboard`)**: Personalized health scores, proximity alerts, and daily tips.

### ⚕️ Smart Utilities
* **Visual Symptom Checker (`/image-checker`)**: Upload photos of skin conditions for AI educational assessment.
* **Voice Assistant (`/voice`)**: Speech-to-text interface tailored for multilingual accessibility.
* **Medication Tracker (`/medicines`)**: Schedule reminders and OCR scanning placeholders for prescriptions.
* **Symptom Flow (`/symptom-checker`)**: Interactive step-by-step diagnostic questionnaire.

### 📚 Community & Learning
* **Health Learning Center (`/learn`)**: Gamified platform with XP tracking for verified articles and quizzes.
* **Diseases Database (`/diseases`)**: Searchable glossary of communicable and lifestyle conditions.
* **Community Forum (`/community`)**: Anonymous Q&A validated by verified medical professionals.
* **News Digest (`/news`)**: Latest public health announcements.

### ⚙️ Identity & Services
* **User Profile & Health Card (`/profile`)**: Universal Smart Health ID (QR Code) and family profiles.
* **Vaccination Center (`/vaccines`)**: Immunization tracking and nearby center discovery.
* **Nearby Services (`/services`)**: Directory for local Hospitals, Pharmacies, and Blood Banks.
* **Admin Analytics (`/admin`)**: Telemetry dashboard tracking daily active users and system health.
* **Accessibility Settings (`/settings`)**: Dark mode, High Contrast, Elderly/Child modes, and PWA Offline Sync toggles.

---

## 🛠️ Technology Stack

**Frontend (Client)**
* Next.js 15 (App Router)
* React 19
* Tailwind CSS v4 (Custom Medical `oklch` Theme)
* Framer Motion (Animations)
* Shadcn UI & Lucide Icons

**Backend (Microservices)**
* FastAPI (Asynchronous Python Framework)
* PostgreSQL (Relational Database via SQLAlchemy)
* Redis (Caching & Rate Limiting)
* Qdrant (Vector Database for RAG)
* LangChain & OpenAI API

**DevOps & Infrastructure**
* Docker & Docker Compose
* GitHub Actions (CI/CD Pipeline)

---

## 💻 Getting Started (Local Development)

### Prerequisites
* Docker Desktop installed and running.
* Node.js v20+
* Python 3.11+

### 1. Spin up the Ecosystem
The easiest way to run the entire stack (Database, Cache, Vector Store, Backend API, and Frontend) is via Docker Compose:
```bash
git clone https://github.com/Jahnavi-Mogarala/HealthGuard-AI.git
cd "HealthGuard AI"
docker-compose up --build
```
* The frontend will be available at: `http://localhost:3000`
* The backend API docs will be at: `http://localhost:8000/docs`

### 2. Manual Setup (Optional)
If you prefer running services outside of Docker for development:

**Backend Setup:**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend Setup:**
```bash
cd frontend
npm install
npm run dev
```

---

## 🎨 Design Philosophy
* **Modern & Minimal**: Clean interfaces, avoiding "futuristic AI" tropes.
* **Friendly & Bright**: Utilizing `#00B8D9` and `#4CAF50` to invoke trust.
* **Accessible**: Support for elderly modes and high contrast settings.

*Built with ❤️ for the Smart India Hackathon.*

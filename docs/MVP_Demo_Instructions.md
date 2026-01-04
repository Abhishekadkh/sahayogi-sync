# Sahayogi Sync: MVP Demo Instructions

This document explains how to run the Minimum Viable Product (MVP) demo of **Sahayogi Sync**.

---

## Prerequisites
- Python 3.10+ and pip installed
- Node.js 18+ and npm/yarn installed
- Git cloned repository

---

## 1. Backend Setup (FastAPI + Express)

### FastAPI (AI Allocator)
```bash
cd backend_fastapi
python -m venv myenv
source myenv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

FastAPI runs on http://127.0.0.1:8000

### Express.js (API Server)

```bash
cd backend_express
npm install
npm run dev
```
Express runs on http://127.0.0.1:5000

## 2. Frontend Setup (React + TailwindCSS)
```bash
cd frontend
npm install
npm run dev
```
Access frontend at http://localhost:5173 (Vite default)

## 3. Running the Demo

--- 

Open the frontend URL

Upload CSV files:

households.csv – Household details
edges.csv – Social connections
flood_scenario.json – Disaster scenario

Click Allocate Resources

View:
Table of allocations per household
Interactive network graph showing resource distribution

---
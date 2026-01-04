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

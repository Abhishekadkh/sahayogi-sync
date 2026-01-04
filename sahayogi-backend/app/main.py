from fastapi import FastAPI
from api import allocate
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Sahayogi Sync",
    version="0.1.0"
)

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # you can restrict to frontend URL later
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(allocate.router)

@app.get("/health")
def health():
    return {"status": "ok"}

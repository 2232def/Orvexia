from fastapi import FastAPI
from app.api import ai_architect

app = FastAPI()

app.include_router(ai_architect.router, prefix="/ai", tags=["AI Architect"])

@app.get("/")
def read_root():
    return {"message": "Orvexia Worker is running"}
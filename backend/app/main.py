from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1 import routes
from app.database import Base, engine

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="React + FastAPI EMS",
    version="1.0.0"
)

# CORS configuration
origins = [
    "http://localhost:5173",  # frontend URL
    # Add other allowed origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,       # or ["*"] for all origins (not recommended in prod)
    allow_credentials=True,
    allow_methods=["*"],         # GET, POST, PUT, DELETE, etc.
    allow_headers=["*"],         # Allow all headers
)
# Register API routes
app.include_router(routes.router, prefix="/api/v1")

@app.get("/")
def root():
    return {"message": "Backend is running "}

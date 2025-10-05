
import os
class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY", "dev")
    JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY", "dev-jwt")
    MONGO_URI = os.environ.get("MONGO_URI", "mongodb://localhost:27017/call2call")
    CORS_ORIGINS = os.environ.get("CORS_ORIGINS", "*")

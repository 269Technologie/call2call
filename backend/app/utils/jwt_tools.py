
import time, jwt
from functools import wraps
from flask import request, jsonify, current_app

def encode_jwt(payload: dict, exp_seconds: int = 86400) -> str:
    to_encode = payload.copy()
    to_encode["exp"] = int(time.time()) + exp_seconds
    return jwt.encode(to_encode, current_app.config["JWT_SECRET_KEY"], algorithm="HS256")

def decode_jwt(token: str) -> dict:
    return jwt.decode(token, current_app.config["JWT_SECRET_KEY"], algorithms=["HS256"])

def jwt_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        auth = request.headers.get("Authorization", "")
        if not auth.startswith("Bearer "):
            return jsonify(error="unauthorized", message="Missing Bearer token"), 401
        token = auth.split(" ", 1)[1].strip()
        try:
            claims = decode_jwt(token)
        except Exception as e:
            return jsonify(error="unauthorized", message=str(e)), 401
        request.user = claims  # type: ignore
        return fn(*args, **kwargs)
    return wrapper

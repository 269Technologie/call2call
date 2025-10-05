
from flask import Blueprint, jsonify
from flask import request
from werkzeug.security import generate_password_hash, check_password_hash
from ...extensions import mongo
from ...utils.validators import require_fields
from ...utils.jwt_tools import encode_jwt

bp = Blueprint("auth", __name__)

@bp.post("/register")
def register():
    data = require_fields("email", "password")
    email = data["email"].lower().strip()
    if mongo.db.users.find_one({"email": email}):
        return jsonify(error="conflict", message="email already exists"), 409
    user = {
        "email": email,
        "password_hash": generate_password_hash(data["password"]),
        "roles": ["user"],
        "ia_config": {},
        "subscription": {"plan": "free", "status": "active"},
    }
    res = mongo.db.users.insert_one(user)
    token = encode_jwt({"sub": str(res.inserted_id), "email": email})
    return jsonify(token=token), 201

@bp.post("/login")
def login():
    data = require_fields("email", "password")
    email = data["email"].lower().strip()
    user = mongo.db.users.find_one({"email": email})
    if not user or not check_password_hash(user["password_hash"], data["password"]):
        return jsonify(error="unauthorized", message="invalid credentials"), 401
    token = encode_jwt({"sub": str(user["_id"]), "email": email})
    return jsonify(token=token)

@bp.post("/reset-password")
def reset_password():
    data = require_fields("email", "new_password")
    email = data["email"].lower().strip()
    user = mongo.db.users.find_one({"email": email})
    if not user:
        return jsonify(error="not_found", message="user not found"), 404
    mongo.db.users.update_one({"_id": user["_id"]}, {"$set": {"password_hash": generate_password_hash(data["new_password"])}})
    return jsonify(status="ok")


from flask import Blueprint, jsonify, request
from ...extensions import mongo
from ...utils.jwt_tools import jwt_required

bp = Blueprint("billing", __name__)

@bp.get("/subscription")
@jwt_required
def get_sub():
    user = mongo.db.users.find_one({"email": request.user.get("email")}) or {}
    return jsonify(user.get("subscription", {"plan": "free", "status": "active"}))

@bp.put("/subscription")
@jwt_required
def set_sub():
    email = request.user.get("email")
    payload = request.get_json(silent=True) or {}
    mongo.db.users.update_one({"email": email}, {"$set": {"subscription": payload}}, upsert=True)
    return jsonify(status="ok", subscription=payload)

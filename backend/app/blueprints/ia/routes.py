
from flask import Blueprint, jsonify, request
from ...extensions import mongo
from ...utils.jwt_tools import jwt_required

bp = Blueprint("ia", __name__)

@bp.get("/config")
@jwt_required
def get_config():
    user = mongo.db.users.find_one({"_id": mongo.db.users.find_one({"email": request.user.get("email")})["_id"]}) if mongo.db.users.find_one({"email": request.user.get("email")}) else None
    cfg = user.get("ia_config", {}) if user else {}
    return jsonify(cfg)

@bp.put("/config")
@jwt_required
def update_config():
    email = request.user.get("email")
    payload = request.get_json(silent=True) or {}
    mongo.db.users.update_one({"email": email}, {"$set": {"ia_config": payload}}, upsert=True)
    return jsonify(status="ok", config=payload)

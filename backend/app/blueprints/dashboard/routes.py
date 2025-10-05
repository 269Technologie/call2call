
from flask import Blueprint, jsonify, request
from ...extensions import mongo
from ...utils.jwt_tools import jwt_required

bp = Blueprint("dashboard", __name__)

@bp.get("/stats")
@jwt_required
def stats():
    user_id = request.user["sub"]
    total_calls = mongo.db.calls.count_documents({"user_id": user_id})
    transcribed = mongo.db.calls.count_documents({"user_id": user_id, "transcription": {"$ne": None}})
    return jsonify({"total_calls": total_calls, "with_transcription": transcribed})


from flask import Blueprint, jsonify, request
from bson import ObjectId
from ...extensions import mongo
from ...utils.jwt_tools import jwt_required

bp = Blueprint("calls", __name__)

def _ser(doc):
    if not doc: return None
    doc["id"] = str(doc.pop("_id"))
    return doc

@bp.get("")
@jwt_required
def list_calls():
    user_id = request.user["sub"]
    cur = mongo.db.calls.find({"user_id": user_id}).sort("created_at", -1).limit(50)
    return jsonify([_ser(d) for d in cur])

@bp.post("")
@jwt_required
def create_call():
    user_id = request.user["sub"]
    payload = request.get_json(silent=True) or {}
    doc = {
        "user_id": user_id,
        "subject": payload.get("subject", "Appel"),
        "status": "created",
        "created_at": mongo.cx.server_info().get('localTime') if hasattr(mongo.cx, 'server_info') else None,  # placeholder
        "transcription": None,
        "metadata": payload.get("metadata", {}),
    }
    res = mongo.db.calls.insert_one(doc)
    doc["_id"] = res.inserted_id
    return jsonify(_ser(doc)), 201

@bp.get("/<call_id>")
@jwt_required
def get_call(call_id):
    doc = mongo.db.calls.find_one({"_id": ObjectId(call_id)})
    if not doc: 
        return jsonify(error="not_found", message="call not found"), 404
    if doc["user_id"] != request.user["sub"]:
        return jsonify(error="forbidden", message="access denied"), 403
    return jsonify(_ser(doc))

@bp.get("/<call_id>/transcription")
@jwt_required
def get_transcription(call_id):
    doc = mongo.db.calls.find_one({"_id": ObjectId(call_id)}, {"transcription": 1, "user_id": 1})
    if not doc:
        return jsonify(error="not_found", message="call not found"), 404
    if doc["user_id"] != request.user["sub"]:
        return jsonify(error="forbidden", message="access denied"), 403
    return jsonify({"call_id": call_id, "transcription": doc.get("transcription")})

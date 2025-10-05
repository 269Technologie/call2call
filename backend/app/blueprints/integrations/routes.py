
from flask import Blueprint, jsonify, request
from ...utils.jwt_tools import jwt_required

bp = Blueprint("integrations", __name__)

_CALENDARS = {}

@bp.get("/calendars")
@jwt_required
def list_calendars():
    return jsonify(_CALENDARS.get(request.user["sub"], []))

@bp.post("/calendars")
@jwt_required
def connect_calendar():
    user_id = request.user["sub"]
    payload = request.get_json(silent=True) or {}
    entry = {"provider": payload.get("provider", "stub"), "connected": True}
    _CALENDARS.setdefault(user_id, []).append(entry)
    return jsonify(entry), 201


from flask import request
from werkzeug.exceptions import BadRequest

def require_fields(*fields):
    data = request.get_json(silent=True) or {}
    missing = [f for f in fields if not data.get(f)]
    if missing:
        raise BadRequest("Missing fields: " + ", ".join(missing))
    return data

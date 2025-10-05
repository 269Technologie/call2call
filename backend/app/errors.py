
from flask import Flask, jsonify
def register_error_handlers(app: Flask) -> None:
    @app.errorhandler(400)
    def bad_request(e):
        return jsonify(error="bad_request", message=str(e)), 400
    @app.errorhandler(401)
    def unauthorized(e):
        return jsonify(error="unauthorized", message=str(e)), 401
    @app.errorhandler(404)
    def not_found(e):
        return jsonify(error="not_found", message="resource not found"), 404
    @app.errorhandler(500)
    def server_error(e):
        return jsonify(error="server_error", message="internal error"), 500

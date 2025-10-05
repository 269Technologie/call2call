
from flask import Flask, jsonify
from .config import Config
from .extensions import mongo, cors
from .errors import register_error_handlers

def register_blueprints(app: Flask) -> None:
    from .blueprints.auth.routes import bp as auth_bp
    from .blueprints.calls.routes import bp as calls_bp
    from .blueprints.dashboard.routes import bp as dashboard_bp
    from .blueprints.ia.routes import bp as ia_bp
    from .blueprints.integrations.routes import bp as integrations_bp
    from .blueprints.billing.routes import bp as billing_bp

    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(calls_bp, url_prefix="/calls")
    app.register_blueprint(dashboard_bp, url_prefix="/dashboard")
    app.register_blueprint(ia_bp, url_prefix="/ia")
    app.register_blueprint(integrations_bp, url_prefix="/integrations")
    app.register_blueprint(billing_bp, url_prefix="/billing")

def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object(Config())

    cors.init_app(app, resources={r"/*": {"origins": app.config.get("CORS_ORIGINS", "*")}})
    mongo.init_app(app)

    register_error_handlers(app)
    register_blueprints(app)

    @app.get("/health")
    def health():
        return jsonify(status="ok")

    @app.get("/")
    def index():
        return jsonify(message="Call2Call backend is running")
    
    return app

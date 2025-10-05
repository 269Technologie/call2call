# 📞 Call2Call — Plateforme d’IA Conversationnelle Téléphonique

**Call2Call** est une application web complète permettant de gérer, analyser et automatiser des appels téléphoniques via une interface moderne (frontend) et une API REST (backend Flask).


## 🧭 Structure du projet


- **Frontend** : interface développée en React + Tailwind (ou équivalent), issue du dossier original.
- **Backend** : API REST en Flask, conforme à la documentation Swagger fournie.


## ⚙️ Installation du projet

### 1. Cloner le dépôt
```bash
git clone https://github.com/269Technologie/call2call.git
cd call2call

# Démarrage du backend
cd backend
python -m venv .venv
source .venv/bin/activate  # ou . venv\Scripts\activate sous Windows
pip install -r requirements.txt
cp .env.example .env
flask --app wsgi.py run --debug

# Démarrage du frontend
cd ../frontend
npm install
npm run dev

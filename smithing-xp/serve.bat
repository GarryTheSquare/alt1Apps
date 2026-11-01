@echo off
REM Serves the app at http://localhost:8643/ - then open alt1://addapp/http://localhost:8643/appconfig.json
cd /d "%~dp0"
python -m http.server 8643 --bind 127.0.0.1

"""
Civilprep.ai — MPSC & UPSC AI Mock Interview Simulator
Vercel Serverless + WSGI + Local Python HTTP Server Entrypoint
Owner: Assure Technologies, Kolhapur (assuretech@gmail.com)
"""
import os
import webbrowser
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
HTML_FILE = BASE_DIR / "index.html"
FALLBACK_HTML_FILE = BASE_DIR / "civilprep.html"


def _load_html_bytes() -> bytes:
    if HTML_FILE.exists():
        return HTML_FILE.read_bytes()
    if FALLBACK_HTML_FILE.exists():
        return FALLBACK_HTML_FILE.read_bytes()
    return b"<h1>Civilprep.ai Simulator</h1>"


def app(environ, start_response):
    """Top-level WSGI application entrypoint for Vercel / Gunicorn."""
    path = environ.get("PATH_INFO", "/")
    if path.endswith(".css") and (BASE_DIR / path.lstrip("/")).exists():
        body = (BASE_DIR / path.lstrip("/")).read_bytes()
        content_type = "text/css; charset=utf-8"
    elif path.endswith(".js") and (BASE_DIR / path.lstrip("/")).exists():
        body = (BASE_DIR / path.lstrip("/")).read_bytes()
        content_type = "application/javascript; charset=utf-8"
    else:
        body = _load_html_bytes()
        content_type = "text/html; charset=utf-8"

    headers = [
        ("Content-Type", content_type),
        ("Content-Length", str(len(body))),
        ("Cache-Control", "no-cache"),
    ]
    start_response("200 OK", headers)
    return [body]


# Alias required by WSGI servers and Vercel Python runtime
application = app


class handler(BaseHTTPRequestHandler):
    """Top-level BaseHTTPRequestHandler entrypoint for Vercel Python Serverless."""

    def do_GET(self):
        req_path = self.path.split("?")[0]
        if req_path.endswith(".css") and (BASE_DIR / req_path.lstrip("/")).exists():
            body = (BASE_DIR / req_path.lstrip("/")).read_bytes()
            content_type = "text/css; charset=utf-8"
        elif req_path.endswith(".js") and (BASE_DIR / req_path.lstrip("/")).exists():
            body = (BASE_DIR / req_path.lstrip("/")).read_bytes()
            content_type = "application/javascript; charset=utf-8"
        else:
            body = _load_html_bytes()
            content_type = "text/html; charset=utf-8"

        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        body = b'{"status": "ok"}'
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


def run_local_server(port: int = 8000):
    os.chdir(BASE_DIR)
    url = f"http://localhost:{port}/"
    print("============================================================")
    print(f" Civilprep.ai Local Server Running at: {url}")
    print(" Lead Emails Configured for:           assuretech@gmail.com")
    print("============================================================")
    try:
        webbrowser.open(url)
    except Exception:
        pass
    server = HTTPServer(("", port), handler)
    server.serve_forever()


if __name__ == "__main__":
    run_local_server(8000)

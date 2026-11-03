"""
TWUMVANE - Rwanda Sign Language Avatar Platform
Serves the 3D avatar sign-language translator on http://localhost:5000
"""
import gzip
import os
import mimetypes
import shutil

from flask import Flask, render_template, send_from_directory, send_file, redirect, request, abort
from werkzeug.utils import safe_join

# Register GLTF/GLB mimetypes to ensure proper content-type headers across all browsers
mimetypes.add_type('model/gltf-binary', '.glb')
mimetypes.add_type('model/gltf+json', '.gltf')

# ─── Create the main Flask app ───────────────────────────────────────────────
app = Flask(__name__, template_folder='templates')

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
TRSL_FRONTEND = os.path.join(ROOT_DIR, 'TRSL', 'frontend')

# Ensure logo.jpg is also available directly inside TRSL_FRONTEND
try:
    src_logo = os.path.join(ROOT_DIR, 'logo.jpg')
    dst_logo = os.path.join(TRSL_FRONTEND, 'logo.jpg')
    if os.path.exists(src_logo) and not os.path.exists(dst_logo):
        import shutil
        shutil.copy2(src_logo, dst_logo)
except Exception as e:
    pass


def _ensure_gzip(path):
    """Return a gzip-compressed copy of path, creating it if missing or stale."""
    gz_path = path + '.gz'
    try:
        if not os.path.exists(gz_path) or os.path.getmtime(gz_path) < os.path.getmtime(path):
            tmp_path = gz_path + '.tmp'
            with open(path, 'rb') as src, gzip.open(tmp_path, 'wb', compresslevel=9) as dst:
                shutil.copyfileobj(src, dst, length=1024 * 1024)
            os.replace(tmp_path, gz_path)
        return gz_path
    except OSError:
        return None


def _serve_static(directory, filename):
    """Serve a file, using gzip and long-lived caching for the avatar model."""
    path = safe_join(directory, filename)
    if path is None:
        abort(404)

    if filename.lower().endswith('.glb') and os.path.isfile(path):
        accepts_gzip = 'gzip' in request.headers.get('Accept-Encoding', '').lower()
        gz_path = _ensure_gzip(path) if accepts_gzip else None
        if gz_path:
            resp = send_file(gz_path, mimetype='model/gltf-binary', conditional=True, etag=True)
            resp.headers['Content-Encoding'] = 'gzip'
        else:
            resp = send_file(path, mimetype='model/gltf-binary', conditional=True, etag=True)
        resp.headers['Cache-Control'] = 'public, max-age=31536000, immutable'
        resp.headers['Vary'] = 'Accept-Encoding'
        return resp

    return send_from_directory(directory, filename)


# ──────────────────────────────────────────────────────────────────────────────
#  Routes
# ──────────────────────────────────────────────────────────────────────────────
@app.route('/')
def welcome():
    """Serve the welcome page."""
    return render_template('welcome.html')


@app.route('/logo.jpg')
def root_logo():
    """Serve the platform logo."""
    return send_from_directory(ROOT_DIR, 'logo.jpg', mimetype='image/jpeg')


@app.route('/favicon.ico')
def root_favicon():
    """Serve favicon."""
    return send_from_directory(ROOT_DIR, 'logo.jpg', mimetype='image/jpeg')


@app.route('/trsl')
def trsl_redirect():
    """Redirect /trsl to /trsl/ so relative asset URLs resolve correctly in all browsers."""
    return redirect('/trsl/', code=302)


@app.route('/trsl/')
def trsl_index():
    """Serve the 3D avatar translator."""
    return send_from_directory(TRSL_FRONTEND, 'index.html')


@app.route('/trsl/<path:filename>')
def trsl_static(filename):
    """Serve static assets (avatar.js, models, logo.jpg, etc.)."""
    return _serve_static(TRSL_FRONTEND, filename)


# Fallback routes in case a browser requests relative paths from root /
@app.route('/avatar.js')
def root_avatar_js():
    return send_from_directory(TRSL_FRONTEND, 'avatar.js')


@app.route('/models/<path:filename>')
def root_models(filename):
    return _serve_static(os.path.join(TRSL_FRONTEND, 'models'), filename)


# ──────────────────────────────────────────────────────────────────────────────
#  Main entry point
# ──────────────────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    _ensure_gzip(os.path.join(TRSL_FRONTEND, 'models', 'twumvane.glb'))

    print()
    print("=" * 65)
    print("  ---  TWUMVANE - Rwanda Sign Language Avatar Platform")
    print("=" * 65)
    print()
    print("  Routes:")
    print("    * Welcome page  >>  http://localhost:5000/")
    print("    * 3D Avatar     >>  http://localhost:5000/trsl/")
    print()
    print("=" * 65)
    print("  [STARTED] Starting server on http://localhost:5000")
    print("=" * 65)
    print()

    app.run(host='0.0.0.0', port=5000, debug=True, threaded=True)
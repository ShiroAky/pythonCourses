# Modules:
from asyncio import transports
from mimetypes import init
from flask import Flask, render_template

# Create a Flask application:
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run('localhost', 3000, debug=False)

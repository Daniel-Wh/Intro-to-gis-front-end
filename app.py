import os # used for environment variables at deployment
from flask import Flask, render_template, jsonify
from flask_restful import Api
from flask_cors import CORS
from db import db

# base flask app settings
app = Flask(__name__)
cors = CORS(app)
uri = 'sqlite:///data.db'
# set for deployment
# uri = os.environ.get('uri')
# secret_key = os.environ.get('secret_key')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = uri
app.config['PROPAGATE_EXCEPTIONS'] = True
api = Api(app)
db.init_app(app)


@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()

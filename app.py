import os # used for environment variables at deployment
from flask import Flask, render_template, jsonify, send_from_directory
from flask_restful import Api
from flask_cors import CORS
from db import db
from links import AddLinks, GetLinks

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


@app.before_first_request
def create_tables():
    db.create_all()


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/getlab/<pdf_id>')
def get_pdf(pdf_id):
    filename = f'{str(pdf_id)}.pdf'
    print(filename)

    try:
        return send_from_directory("./src/static/", filename=filename, as_attachment=True)
    except FileNotFoundError:
        return 404


api.add_resource(GetLinks, '/getlinks')
api.add_resource(AddLinks, '/addlinks')

if __name__ == '__main__':
    app.run()

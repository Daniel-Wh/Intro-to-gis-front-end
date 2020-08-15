from db import db
from flask_restful import Resource


class Links(db.Model):
    # create table
    __tablename__ = 'Links'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(256))
    url = db.Column(db.String(256))

    def __init__(self, url, description):
        self.description = description
        self.url = url

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def del_from_db(self):
        db.session.delete(self)
        db.session.commit()

    def json(self):
        return {
            'description': self.description,
            'url': self.url
        }

    @classmethod
    def get_links(cls):
        links = []
        row = db.session.query(cls)

        for link in row:
            objects = {
                'description': link.description,
                'url': link.url
            }
            links.append(objects)
        return links


class GetCards(Resource):

    def get(self):
        data = Links.get_links()
        return data

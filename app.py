"""
Flask backend to display quote in browser
#https://damyanon.net/flask-series-testing/
"""
import json
import logging
from flask import Flask, render_template
import requests

logging.basicConfig(format='%(levelname)s:%(message)s', level=logging.DEBUG)





APP = Flask(__name__)

DEFAULT_QUOTE = {u'quoteText': u'The awareness of our own strength makes us modest.',
                 u'senderName': u'',
                 u'senderLink': u'',
                 u'quoteAuthor': u'Paul Cezanne',
                 u'quoteLink': u'http://forismatic.com/en/0bef4d5e85/'}

API = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"

def get_quote():
    logging.debug("In get quote :)")
    try:

        quote = requests.get(API).json()
        quote = json.dumps(quote)
        return quote
    except Exception as e:
        logging.error(e)
        return DEFAULT_QUOTE




@APP.route('/')
def hello_world():
    return render_template('index.html', quote=get_quote())

@APP.route('/getQuote', methods=['GET'])
def getQuote():

    logging.debug("In Getquote")
    quote = get_quote()
    return quote

if __name__ == '__main__':

    APP.run(debug=True)

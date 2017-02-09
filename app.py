from flask import Flask
import requests
import json

app = Flask(__name__)

DEFAULT_QUOTE={u'quoteText': u'The awareness of our own strength makes us modest.', u'senderName': u'', u'senderLink': u'', u'quoteAuthor': u'Paul Cezanne', u'quoteLink': u'http://forismatic.com/en/0bef4d5e85/'}

API = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"

def get_quote():
    
    try:

        quote=requests.get(API).json()
        quote=json.dumps(quote)
        return quote
    except Exception as e:
        print e
        return DEFAULT_QUOTE
    #print quote




@app.route('/')
def hello_world(quote=None):    
    return str(get_quote())



    
if __name__ == '__main__':
    
    app.run(debug=True)
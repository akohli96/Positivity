from flask import Flask
import requests

app = Flask(__name__)

API = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"

def get_quote():
    #try:
    #print(requests.get(API).json())
    return requests.get(API).json()
    #finally:
     #   return None


@app.route('/')
def hello_world(quote=None):    
    return str(get_quote())



    
if __name__ == '__main__':
    
    app.run(debug=True)
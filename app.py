"""
Flask backend to display quote in browser
"""


import logging
from flask import Flask, render_template, jsonify
import requests
from constants import CONSTANTS

logging.basicConfig(format='%(levelname)s:%(message)s', level=logging.DEBUG)


APP = Flask(__name__)


def get_quote():
    """
    Fetches a quote from external API
    Args:
        None
    Returns:
        string

    Example: quote=get_quote()

    """
    logging.debug("In get quote :)")
    try:

        quote = requests.get(CONSTANTS['API']).json()
        return quote
    except Exception as e:
        logging.error(e)
        return CONSTANTS['DEFAULT_QUOTE']


@APP.route('/')
def hello_world():
    """
    Fetches a quote from external API and renders index
    Args:
        None
    Returns:
        template

    """
    positive_quote = get_quote()
    return render_template('index.html', quote=positive_quote)


@APP.route('/get_ajax_quote', methods=['GET'])
def get_ajax_quote():
    """
    AJAX call GET method to render a quote using get_quote()
    Args:
        None
    Returns:
        json

    """

    logging.debug("In get_ajax_quote")
    positive_quote = get_quote()

    return jsonify(positive_quote)


if __name__ == '__main__':

    APP.run(debug=True)

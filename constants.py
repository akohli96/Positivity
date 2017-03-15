"""
Constants for flask backend
Contains default quote and API
"""
CONSTANTS = dict(
    DEFAULT_QUOTE={u'quoteText': u'The awareness of our own strength makes us modest.',
                   u'senderName': u'',
                   u'senderLink': u'',
                   u'quoteAuthor': u'Paul Cezanne',
                   u'quoteLink': u'http://forismatic.com/en/0bef4d5e85/'},
    API="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
)

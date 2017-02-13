const request = require('request');

request.get('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json', function (err, res, body) { 
  if (err) console.log(err); 
  const quote = JSON.parse(body.replace(/\'/g, "\\'"));
  const author = quote.quoteAuthor ? '\n\t--' + quote.quoteAuthor : '';
  console.log('Quote of the Day: \n"' + quote.quoteText.replace(/(^\s+|\s+$)/g, '') + "\"" + author);  
  console.log('Link: ' + quote.quoteLink);
});

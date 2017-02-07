
var quote;

function getquote() {
        var forismaticURL = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

  $.getJSON(forismaticURL, function(data) {

      console.log(status + data);
      $('#lol').text(data['quoteText'])
      console.log(data);

  });
};

$(document).ready(function(){
getquote();
    $("button").click(function(){
        console.log("GETTING CLICKED");
    getquote();
});

 });


var quote;

function getquote() {
        var forismaticURL = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

  $.getJSON(forismaticURL, function(data) {

    text.html(data.quoteText);
    if (data.quoteAuthor) {
      author.html(data.quoteAuthor);
      author.attr("href", data.quoteLink);
    } else {
      author.removeAttr("href");
      author.html("<strong>Anonymous</strong>");
    }
    tweetThis = data.quoteText + " By - " + data.quoteAuthor;
  });

};
$(document).ready(function(){
getquote();
    $("button").click(function(){
        console.log("GETTING CLICKED");
    getquote();
});

 });

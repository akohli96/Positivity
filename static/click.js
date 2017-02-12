document.onclick = function(event) {
    // Compensate for IE<9's non-standard event model
    // http://stackoverflow.com/questions/2621835/detect-click-on-browser
    //if (event===undefined) event= window.event;
    //var target= 'target' in event? event.target : event.srcElement;

    console.log('clicked something in browser');
    //http://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp
    //http://www.w3schools.com/xml/xml_http.asp

    var quoteRequest = new XMLHttpRequest();
    quoteRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            console.log("It succeeded.")
            document.getElementById("demo").innerHTML = quoteRequest.responseText;

        }
    };
    quoteRequest.open("GET", "/getQuote", true);
    quoteRequest.send();

};
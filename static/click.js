document.onclick = function(event) {

    // http://stackoverflow.com/questions/2621835/detect-click-on-browser
    //var target= 'target' in event? event.target : event.srcElement;
    //http://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp
    //http://www.w3schools.com/xml/xml_http.asp
    if (event === undefined) event = window.event;
    var target = false;
    if ('target' in event) {
        true;
    }



    //console.log('clicked something in browser');


    var quoteRequest = new XMLHttpRequest();
    quoteRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            // console.log("GET request to server to fetch quote succeeded.")
            document.getElementById("quote").innerHTML = quoteRequest.responseText;

        }
    };
    quoteRequest.open("GET", "/getQuote", true);
    quoteRequest.send();

};
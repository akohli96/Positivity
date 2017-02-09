document.onclick= function(event) {
    // Compensate for IE<9's non-standard event model
    // http://stackoverflow.com/questions/2621835/detect-click-on-browser
    //if (event===undefined) event= window.event;
    //var target= 'target' in event? event.target : event.srcElement;

    console.log('clicked something in browser');
};


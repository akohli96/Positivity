
$(document).ready(function(){
    $("button").click(function(){
        console.log("GETTING CLICKED");

        $.ajax({
            url : 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parsequote',
            type: 'GET',
            dataType: 'jsonp',
            crossDomain: true,
            jsonpCallback: 'parsequote',
            
            
            error : function(xhr,status,error){
                console.log("WHOOPS");
                console.log(xhr  + "XHR");
                console.log(status + "STATUS");
                console.log(error + "ERROR");

            },

            success : function(data,status,xhr){
                
                console.log(data);
                console.log(status);
                console.log(xhr);
               

            },

  
       
        


 

        });
        function parsequote(data){
            console.log("IN PARSEQUOTE");
            console.log(data);
        }
  


});

 });

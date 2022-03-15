
$(document).ready(function(){
    
reload();

$("#add_button").click(function(){ 
   
    var enlace = $("#add_link").val();
    $("#menu").append(`<li><a href="https://${enlace}">${enlace}</a></li>`);
    $("#add_link").val("");       

    reload();
});



});

 function reload(){
    $("a").each(function() {
    
        let link = $(this).attr("href");
        console.log(link)
        $(this).text(link);
        
        $(this).attr("target", "_blank");
         
    });
};



$(document).ready(function(){

//   LOAD

// $("#datos").load("https://reqres.in/api/users?page=2", function (response, status, request) {
//     this; // dom element
    
// });
 
// GET Y POST

$.get("https://reqres.in/api/users", {page: 2},
function (response) {
        response.data.forEach((element, i) => {
        $("#datos").append(`<p>${element.first_name}</p>`)
    });
});


$("form").submit(function (e) { 

   var usuario = { 
        
    name: $("input[name='name']").val(),
    web:  $("input[name='web']").val()

   };


    // $.post($(this).attr("action"), usuario,
    // function (response) {
    //     console.log(response);
    // });

    e.preventDefault();
    

    
$.ajax({
    type: "post",
    url: $(this).attr("action"),
    data: usuario,
    dataType: "JSON",
    beforeSend: function (response){ 
        console.log("Enviando...");
    },
    success: function (response) {
        console.log(response);
    },
    error: function(response){
        console.log("Error");
    },
    timeOut: 1000
});
});

// $.ajax




});
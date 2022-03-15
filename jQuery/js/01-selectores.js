$(document).ready(()=>{
    
// Selector de Id

var rojo = $("#rojo");
var amarillo = $("#amarillo");
var verde = $("#verde");
var blanco = $("#white");

rojo.css("background","red")
    .css("width","500")
    .css("color","white")
    .css("height","50")
    
amarillo.css("background","yellow")
    .css("width","500")
    .css("color","black")
    .css("height","50")

verde.css("background","green")
    .css("width","500")
    .css("color","white")
    .css("height","50")

blanco.css("background","white")
    .css("width","500")
    .css("color","black")
    .css("height","50")

var parrafos = $("p");

console.log(parrafos);
parrafos.click(function (e) { 
    
    if(parrafos.hasClass("zebra")){
        $(this).removeClass("zebra");
    
    }else{
        $(this).addClass("zebra");
    }
    e.preventDefault();
});


  
});
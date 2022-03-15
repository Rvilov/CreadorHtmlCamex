$(document).ready(function(){
    $("#mostrar").hide();

    $("#mostrar").click(function (){ 
        $(this).hide();  
        $("#ocultar").show();
        $("#caja").show("fast");
            
    });

    $("#ocultar").click(function (){ 
        $(this).hide();  
        $("#mostrar").show();
        $("#caja").hide("fast");
            
    });

    $("#todoEnUno").click(function (e) { 
        $("#caja").fadeToggle("fast");
        
    });

    $("#animar").click(function(){
        $("#caja").animate({
            
            marginLeft: "500px",
            fontSize:"40px",
            height:'110px'
        },"slow")
                .animate({
                    borderRadius: '500px',
                    marginTop: '80px'
                },"slow")
                .animate({
                    borderRadius: '0',
                    marginLeft: '0'
                },"slow")
                .animate({
                    borderRadius: '100px',
                    marginTop: '0'
                },"slow")

    })

});
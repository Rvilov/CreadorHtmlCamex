$(document).ready(function(){
    
    $(".elemento").resizable();
    $(".elemento").draggable();

    // $("ul").selectable();
    $("ul").sortable({
        
        update: function(event,ui){
            console.log("Ha cambiado la lista");
        }
    
    });
    $("#elemento-movido").draggable();
    $("#area").droppable({

        drop: function(){
            console.log("Has soltado algo");
                }
    });

    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("shake",  4000);
    });

    $(document).tooltip();

    $("#lanzar").click(function(){
        $("#popup").dialog();
    })
    
    $("#calendario").datepicker();

    $("#pestanas").tabs();
})
$(document).ready(function(){



//mouse over y over

    var caja = $("#caja");

    /*
    caja.mouseover(function(){
        $(this).css("background","lightblue");
    })

    caja.mouseout(function(){
        $(this).css("background","lightgreen");
    })
   

    */
    //hover

    // function cambiaVerde(){
    //     $(this).css("background","lightgreen");
    // };

    // function cambiaAzul(){
    //     $(this).css("background","lightblue");
    // };


    // caja.hover(cambiaAzul,cambiaVerde);

    //click

    // caja.click(function(){
    //     $(this).css("background","red");
    // });

    // caja.dblclick(function(){
    //     $(this).css("background","yellow");
    // })

    //blur y focus
    

    // $("#nombre").focus(function(){
    //     $(this).css("border","2px solid green");
    // });

    // $("nombre").blur(function(){
    //     $(this).css("border","2px solid transparent");
    //     $("#datos").text($(this).val()).show();
       
                
    // })

    // $(document).mousemove(function(){
    //     $("body").css("cursor","none")
    //     console.log(event.clientX);
    //     console.log(event.clientY);
    //     $("#sigueme").css("left",event.clientX)
    //                 .css("top",event.clientY);
    // })

   

    caja.hover(function () {
            $(this).css("background","lightblue");
        }, function () {
            $(this).css("background","lightgreen")
        }
    );

    caja.click(function (e) { 
        $(this).css("background","black")
        e.preventDefault();
        
    });

    caja.dblclick(function (){
        $(this).css("background","yellow")

    })

    $("#nombre").focus(function (e) { 
        $(this).css("border","2px solid green");
        e.preventDefault();
        
    });

     $("#nombre").blur(function(){
        $(this).css("border","2px solid transparent");
        $("#datos").text($(this).val()).show();
       
      })

$("#datos").mousedown(function () { 
    $(this).css("border-color","grey")
});

$("#datos").mouseup(function () { 
    $(this).css("border-color","red")
});

$(document).mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    $("body").css("cursor","none");
    
    $("#sigueme").css("left",event.clientX)
                    .css("top",event.clientY);
});

});
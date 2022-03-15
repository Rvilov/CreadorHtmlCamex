$(document).ready(function () {
     
    

    
    $("#datos_html").submit(function (e) { 
        var video = $("#video").val();
        var videoc = video.substr(17,11);
        var material = $("#material").val();
        var material2 = $("#material2").val();
        var excel = $("#excel").val();
        var practica = $("#practica").val(); 
     
        var textoHTML = []

        if (material == "" || material2 =="" && excel != "" && video !="" && practica !="") {
            textoHTML[0] = `<p style='text-align: center;'><iframe src="https://www.youtube.com/embed/${videoc}" width='560' height='315' frameborder='0' allowfullscreen='allowfullscreen'></iframe></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material}"  target='_blank' rel='noopener'>Material</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${excel}" target='_blank' rel='noopener'>Excel</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${practica}" target='_blank' rel='noopener'>Practica</a></span></p>`;    
                            console.log("opcion 1");
        }else if(material != "" && material2 !="" && excel == "" && video !="" && practica !=""){
            textoHTML[0] = `<p style='text-align: center;'><iframe src="https://www.youtube.com/embed/${videoc}" width='560' height='315' frameborder='0' allowfullscreen='allowfullscreen'></iframe></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material}"  target='_blank' rel='noopener'>Material</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material2}"  target='_blank' rel='noopener'>Material 2</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${practica}" target='_blank' rel='noopener'>Practica</a></span></p>`;    
                            console.log("opcion 2");
        }else if(material != "" && material2 !="" && excel != "" && video !="" && practica ==""){
            textoHTML[0] = `<p style='text-align: center;'><iframe src="https://www.youtube.com/embed/${videoc}" width='560' height='315' frameborder='0' allowfullscreen='allowfullscreen'></iframe></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material}"  target='_blank' rel='noopener'>Material</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${excel}" target='_blank' rel='noopener'>Excel</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material2}"  target='_blank' rel='noopener'>Material 2</a></span></p>
        `;                  console.log("opcion 3");
        }else if(material != "" && material2 !="" && excel != "" && video =="" && practica !=""){
            textoHTML[0] = `<p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material}"  target='_blank' rel='noopener'>Material</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material2}"  target='_blank' rel='noopener'>Material 2</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${excel}" target='_blank' rel='noopener'>Excel</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${practica}" target='_blank' rel='noopener'>Practica</a></span></p>`;    
                            console.log("opcion 4");
        }else if(material != "" && material2 =="" && excel == "" && video !="" && practica !=""){
            textoHTML[0] = `<p style='text-align: center;'><iframe src="https://www.youtube.com/embed/${videoc}" width='560' height='315' frameborder='0' allowfullscreen='allowfullscreen'></iframe></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material}"  target='_blank' rel='noopener'>Material</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${practica}" target='_blank' rel='noopener'>Practica</a></span></p>`;    
                            console.log("opcion 5"); 
        }else if(material != "" && material2 =="" && excel == "" && video !="" && practica ==""){
            textoHTML[0] = `<p style='text-align: center;'><iframe src="https://www.youtube.com/embed/${videoc}" width='560' height='315' frameborder='0' allowfullscreen='allowfullscreen'></iframe></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material}"  target='_blank' rel='noopener'>Material</a></span></p>
                            `;
                            console.log("opcion 6");    
        }else if(material != "" && material2 =="" && excel == "" && video =="" && practica !=""){
            textoHTML[0] = `<p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material}"  target='_blank' rel='noopener'>Material</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${practica}" target='_blank' rel='noopener'>Practica</a></span></p>`;    
                            console.log("opcion 7");
        }else if(material == "" && material2 =="" && excel != "" && video !="" && practica !=""){
            textoHTML[0] = `<p style='text-align: center;'><iframe src="https://www.youtube.com/embed/${videoc}" width='560' height='315' frameborder='0' allowfullscreen='allowfullscreen'></iframe></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${excel}" target='_blank' rel='noopener'>Excel</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${practica}"' "target='_blank' rel='noopener'>Practica</a></span></p>`;    
                            console.log("opcion 8");    
        }else if(material != "" && material2 !="" && excel == "" && video !="" && practica ==""){
            textoHTML[0] = `<p style='text-align: center;'><iframe src="https://www.youtube.com/embed/${videoc}" width='560' height='315' frameborder='0' allowfullscreen='allowfullscreen'></iframe></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material}"  target='_blank' rel='noopener'>Material</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material2}"  target='_blank' rel='noopener'>Material 2</a></span></p>
                          `;
                          console.log("opcion 9")    
        }else if(material != "" && material2 =="" && excel != "" && video !="" && practica ==""){
            textoHTML[0] = `<p style='text-align: center;'><iframe src="https://www.youtube.com/embed/${videoc}" width='560' height='315' frameborder='0' allowfullscreen='allowfullscreen'></iframe></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material}"  target='_blank' rel='noopener'>Material</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${excel}" target='_blank' rel='noopener'>Excel</a></span></p>
                        `;
                        console.log("opcion 10")    
        } else{
            textoHTML[0] = `<p style='text-align: center;'><iframe src="https://www.youtube.com/embed/${videoc}" width='560' height='315' frameborder='0' allowfullscreen='allowfullscreen'></iframe></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material}"  target='_blank' rel='noopener'>Material</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${material2}"  target='_blank' rel='noopener'>Material 2</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${excel}" target='_blank' rel='noopener'>Excel</a></span></p>
                            <p style='text-align: center;'><span style='font-size: xx-large;'><a href="${practica}" target='_blank' rel='noopener'>Practica</a></span></p>`;    
        }
        
        
        
        $("#datos").val(textoHTML.join()); 

    e.preventDefault();
    });
    

});

//Eventos
document.getElementById("enlace_1").addEventListener("click",muestraOculta);
document.getElementById("enlace_2").addEventListener("click",muestraOculta);
document.getElementById("enlace_3").addEventListener("click",muestraOculta);

function muestraOculta(e) {

    switch(e.target.id){

       case "enlace_1":
        var x = document.getElementById("contenidos_1");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("enlace_1").innerHTML="Ocultar Contenidos";
        } else {
          x.style.display = "none";
          document.getElementById("enlace_1").innerHTML="Mostrar Contenido Ocultalo";
        }
        break;


        case "enlace_2":
        var x = document.getElementById("contenidos_2");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("enlace_2").innerHTML="Ocultar Contenidos";
        } else {
          x.style.display = "none";
          document.getElementById("enlace_2").innerHTML="Mostrar Contenido Ocultalo";
        }
        break;
        

        case "enlace_3":
        var x = document.getElementById("contenidos_3");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("enlace_3").innerHTML="Ocultar Contenidos";
        } else {
          x.style.display = "none";
          document.getElementById("enlace_3").innerHTML="Mostrar Contenido Ocultalo";
        }
        break;

    }
    
}
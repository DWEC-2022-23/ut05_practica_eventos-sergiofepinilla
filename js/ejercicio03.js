//Variables para modificar los valores de las cajas
let screenLog = document.querySelector("#text-box");
let screenLog2 = document.querySelector("#stask");
let screenLog3 = document.querySelector("#box-name");

//Eventos
document.addEventListener('mousemove', logKey);
addEventListener("click", clickButton,logKey);

//Evento que controla el teclado
addEventListener("keydown",(event)=>{

    document.getElementById("info").classList.remove("amarillo");
    
    if( document.getElementById("info").className!="azul"){

        document.getElementById("info").classList.toggle("azul");
    }
    screenLog3.innerText = `TECLADO`;
    let tecla = event.key;
    let codigo = event.code;

    screenLog.innerText = `
    Carácter [${tecla}]
    Código [${codigo}]`;
    screenLog2.innerText = `
    Se ha pulsado un tecla`;

});

//Movimiento del raton
function logKey(e) {

    screenLog3.innerText = `RATON`;

    document.getElementById("info").classList.remove("amarillo");
    document.getElementById("info").classList.remove("azul");

    screenLog.innerText = `
    Navegador X/Y:[${e.screenX}, ${e.screenY}]
    Pagina X/Y: [${e.pageX}, ${e.pageY}]`;

    screenLog2.innerText =`
    El raton se esta moviendo
    `;
}

//Pulsacion de click del raton
function clickButton(e){
    
    screenLog3.innerText = `RATON`
    document.getElementById("info").classList.remove("azul");

    document.getElementById("info").classList.toggle("amarillo");
  
    if(document.getElementById("info").className!="amarillo"){
        document.getElementById("info").classList.toggle("amarillo");
    }

    screenLog.innerText = `
    Navegador X/Y:[${e.screenX}, ${e.screenY}]
    Pagina X/Y: [${e.pageX}, ${e.pageY}]`;

    screenLog2.innerText = `
    Se ha hecho click con el ratón`;
}

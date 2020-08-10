let listaGifs;
let contenedorMisGifs;
let base;
let request;
if(localStorage.getItem("misGifs") != null) {
listaGifs = JSON.parse(localStorage.getItem("misGifs"));
contenedorMisGifs = document.getElementById('cont');
base;
window.onload = cargarMisGifs;

}

function cargarMisGifs(){

    for(let i = 0; i< listaGifs.length; i++){
        // request = new XMLHttpRequest();
     base = document.createElement('div');
        // request.open("POST", "http://foo.com/submitform.php");

    base.innerHTML = 
    `<div class="base">
    <img class="embed" id="miGif${i}" src="${listaGifs[i]}" alt="">
    <div class="overlay">
        <div class="background"></div>
        <div class="iconosBox">
            <div class="iconos" id="fav">
            <img src="./imagenes/icon-fav-hover.svg" alt="">
        </div>
        <div class="iconos" id="download">
            <img src="./imagenes/icon-download.svg" alt="">
        </div>
        <div class="iconos" id="maximg">
            <img src="./imagenes/icon-max.svg" alt="">
        </div>
    </div>
    <div class="nameBox">
        <h4>User</h3>
         <h3>Titulo</h2>
    </div>
</div>`;
    
    contenedorMisGifs.appendChild(base);
        
}
}
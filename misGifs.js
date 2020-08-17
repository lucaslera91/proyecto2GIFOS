let listaGifs;
let contenedorMisGifs;
let base;
let request;
if(localStorage.getItem("misGifs") != null) {
listaGifs = JSON.parse(localStorage.getItem("misGifs"));
//alert("fuck");

}
contenedorMisGifs = document.getElementById('cont');
window.onload = cargarMisGifs;
function cargarMisGifs(){
    debugger;
    for(let i = 0; i< listaGifs.length; i++){
        // request = new XMLHttpRequest();
     base = document.createElement('div');
        // request.open("POST", "http://foo.com/submitform.php");
      
       //alert("still weird");

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
        <a href="./verGifo.html"><img src="" alt=""><i class="far fa-heart"></i></a>
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
//window.onload = testingtrend;
function testClick() {
    // alert('should work');
    debugger;
    let idend = this.id;
    let idgif = idend.slice(3);
    //alert(idend.slice(3));
    //alert(idend.slice(0, 3));
    if (idend.slice(0, 3) == 'fav') {
        //alert('fav');
        let favSave = JSON.parse(localStorage.getItem("favs"));
        if (favSave != null) {
            for (let i = 0; i < favSave.length; i++) {
                arrayFav.push(favSave[i]);
                //debugger;
            }
        } arrayFav.push(idgif);
        localStorage.setItem("favs", JSON.stringify(arrayFav));

    }
    if (idend.slice(0, 3) == 'dwl') {
        //alert(idgif);
        //ver como descargo esto...
        //si es de fetch o de otro lado
        //verGif(idgif, 1);

    }
    if (idend.slice(0, 3) == 'max') {
       // debugger;
        // alert('max');
        //link a maximizar imagen
        //fetch con este id en otra linea
        localStorage.setItem("max", JSON.stringify(idgif));
    }
}






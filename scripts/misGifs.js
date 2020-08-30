let listaGifs;
let contenedorMisGifs;
let baseGifos;
let request;
let btn4;
let btn5;
test = "";
let listaGif = JSON.parse(localStorage.getItem("myGifs"));
if (localStorage.getItem("misGifs") != null) {
    listaGif = JSON.parse(localStorage.getItem("misGifs"));
    //alert("fuck");
}
//alert(listaGif);

contenedorMisGifs = document.getElementById('cont');

window.onload = cargarMisGifs();

function cargarMisGifs() {

    if(listaGif == null || listaGif == ""){
        //alert('esto');
        let carasGifos = document.getElementById('gifoCaritas');
               carasGifos.innerHTML = `<img src="./imagenes/icon-mis-gifos-sin-contenido.svg" alt="">
               <h3>Animate a crear tu primer GIFO</h3>`
    }else{

    fetch(`https://api.giphy.com/v1/gifs?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U&ids=${listaGif}`)
        .then(function (dato1) {
            result = dato1.json();
            return result;
            //https://api.giphy.com/v1/gifs?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U&ids=dCWgE8Kopv4QDzILmo
        })
        .then(function (result) {
            //debugger;
//alert(listaGif);

            for (let i = 0; i < result.data.length; i++) {

                baseGifos = document.createElement('div');
                baseGifos.innerHTML =
                    `<div class="base">
    <img class="embed" id="${result.data[i].id}" src="${result.data[i].images.fixed_height.url}" alt="">
    <div class="overlay">
        <div class="background"></div>
        <div class="iconosBox">
            <div class="iconosDelete" id="del${result.data[i].id}">
            <i class="far fa-trash-alt"></i>
        </div>
        <div class="iconos" id="dwl${result.data[i].id}">
            <img src="./imagenes/icon-download.svg" alt="">
        </div>
        <div class="iconos" id="max${result.data[i].id}">
        <a href="./verGifo.html"><img src="./imagenes/icon-max.svg" alt=""></a>
        </div>
    </div>
    <div class="nameBox">
        <h4>${result.data[i].username}</h3>
         <h3>${result.data[i].title}</h2>
    </div>
</div>`;

                contenedorMisGifs.appendChild(baseGifos);

            }
            btn4 = document.getElementsByClassName('iconos');
            btn5 = document.getElementsByClassName('iconosDelete');
            
            //debugger;
            for (let i = 0; i < btn4.length; i++) {
                btn4[i].addEventListener('click', testClick);
                //btn4[i].addEventListener('click', ()=> {alert(this.id)});

            }
            for (let i = 0; i < btn5.length; i++) {
                btn5[i].addEventListener('click', eliminarMyGif);
                //btn5[i].addEventListener('click', ()=> {alert(this.id)});
                //eliminarMyGif

            }
        
        }).catch(function (err) {
            console.log(err.name, err.message)
            // debugger;
        })
    }
}

function thisId(){
    alert(this.id);
}

function eliminarMyGif(){
    let idmMyGif= this.id.slice(3);
    alert(this.id);
    alert(idmMyGif);
    let arrayMyGifs = JSON.parse(localStorage.getItem("myGifs"));

    let gifUpdate = eliminarDeLista(arrayMyGifs, idmMyGif);

    alert(gifUpdate);

    localStorage.setItem("myGifs", JSON.stringify(gifUpdate));

}

//window.onload = testingtrend;







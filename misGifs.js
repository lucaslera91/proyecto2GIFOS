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

    fetch(`https://api.giphy.com/v1/gifs?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U&ids=${listaGif}`)
        .then(function (dato1) {
            result = dato1.json();
            return result;
            //https://api.giphy.com/v1/gifs?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U&ids=dCWgE8Kopv4QDzILmo
        })
        .then(function (result) {
            debugger;
//alert(listaGif);

            for (let i = 0; i < result.data.length; i++) {

                baseGifos = document.createElement('div');
                baseGifos.innerHTML =
                    `<div class="base">
    <img class="embed" id="${result.data[i].id}" src="${result.data[i].images.fixed_height.url}" alt="">
    <div class="overlay">
        <div class="background"></div>
        <div class="iconosBox">
            <div class="iconos" id="">
            <img src="" class="basura" alt=""><i class="far fa-trash-alt"></i>
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
            btn5 = document.getElementsByClassName('basura');
            
            //debugger;
            for (let i = 0; i < btn4.length; i++) {
                btn4[i].addEventListener('click', testClick);
                //btn4[i].addEventListener('click', ()=> {alert(this.id)});

            }
            for (let i = 0; i < btn5.length; i++) {
                btn5[i].addEventListener('click', eliminarMyGif);
                //btn5[i].addEventListener('click', ()=> {alert(this.id)});


            }

        }).catch(function (err) {
            console.log(err.name, err.message)
            // debugger;
        })
}


//var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; 
function eliminarMyGif() {
    for (var i = 0; i < listaGif.length; i++) {

        if (listaGif[i] === this.id) {
            listaGif.splice(i, 1);

        }
    }
    localStorage.setItem("myGifs", JSON.stringify(listaGif));
    //=> [1, 2, 3, 4, 6, 7, 8, 9, 0]
}


//window.onload = testingtrend;







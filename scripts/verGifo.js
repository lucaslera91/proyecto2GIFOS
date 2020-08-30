let verGifoNet = 0;

let contenerGif = document.getElementById('contenerGifoMax');
//alert('start');
let idMax = "";
//alert(JSON.parse(localStorage.getItem("max")));
verGif(JSON.parse(localStorage.getItem("max")));

function verGif(id) {


    //alert(id);
    debugger;
    // alert(id);
    fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U`)
        .then(function (dato1) {
            result = dato1.json();
            return result;
        })
        .then(function (result) {
        
            let likeGif = JSON.parse(localStorage.getItem("favs"));
            if(likeGif == null){
                like = [];
            }
            let blueHeartGif;
            localStorage.setItem("max", JSON.stringify(""));
            if(likeGif.indexOf(result.data.id) == (-1)){
                blueHeart = '<i class="far fa-heart"></i>'
            }else{blueHeart = '<i class="fas fa-heart"></i>'}

            textoMax = document.getElementById("textoMax");
            let botonMax = document.getElementById('gifElegido');
            botonMax.innerHTML =
                `
                
        <div class="contenedorPrincipal">
             <div class="gifcontenedor" id="contenerGifoMax">
             <img class="embed" src="${result.data.images.original.url}" alt="">
            </div>
            <div class="textos">
                <div class="textocontenedor" id="textoMax">
                    <h4>${result.data.username}</h4>
                    <h3>${result.data.title}</h3>
                </div>
                
                <div class="iconoContenedor">
                    <div class="iconos" id="fav${result.data.id}">
                    ${blueHeart}
                    </div>
                    <div class="iconos" id="dwl${result.data.id}"">
                        <img src="./imagenes/icon-download.svg" alt="">
                    </div>
                </div>
            </div>
        </div>`;

        let botonlike = document.getElementsByClassName('iconos');
        for(let i = 0; i<botonlike.length; i++){
            botonlike[i].addEventListener('click', testClick);
        }
            //testClick

        })
        .catch(function (err) {
            console.log(err.name, err.message)
            debugger;
        })
}




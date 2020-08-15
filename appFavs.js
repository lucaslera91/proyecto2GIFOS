
let favHelper = 0;
let localFavs = JSON.parse(localStorage.getItem("favs"));
let displayG = document.getElementById("cont");
let sinFav = document.getElementById('titulo');
let btn3;
//alert('fuck');
if (JSON.parse(localStorage.getItem("favs") != null)) {
    favHelper = 1;
    //alert(localFavs);
    getGifId();
} else {
    if(localFavs == null){
        sinFav.innerHTML = `<div id="noimagenfav">
        <h3>Favoritos</h3>
        <img src="./imagenes/icon-fav-sin-contenido.svg" alt="">
    </div>`
    }

}
//${localFavs}  6pQrmGZKnmV3y
//lqvkE2eYHvPillZKNU  5BPWd4MJU5Jef3KLZk,lqvkE2eYHvPillZKNU
//get the id of button..
//5BPWd4MJU5Jef3KLZk
//&limit=12&offset=${verMas}
function getGifId() {

    sinFav.innerHTML = `<div class="imagenfav">
        <h3>Favoritos</h3>
        <img src="./imagenes/icon-favoritos.svg" alt="">
    </div>`;

    if (favHelper != 0) {
        debugger;
        fetch(`https://api.giphy.com/v1/gifs?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U&ids=${localFavs}`)
            .then(function (dato1) {
                result = dato1.json();
                return result;
            })
            .then(function (result) {
                result.data.forEach(element => {
                    base = document.createElement('div');
                    base.className = "base";
                    //base.id = `fav${countsearch}download${countsearch}maximg${countsearch}`;
                    //`<img src="${element.images.fixed_height.url}" type="">`;
                    base.innerHTML =
                        `
                        <img class="embed" src="${element.images.fixed_height.url}" alt="">
                        <div class="overlay">
                            <div class="background"></div>
                            <div class="iconosBox">
                                <div class="iconos" id="fav${element.id}">
                                    <img src="./imagenes/icon-fav-hover.svg" alt="">
                                </div>
                                <div class="iconos" id="dwl${element.id}">
                                    <img src="./imagenes/icon-download.svg" alt="">
                                </div>
                                <div class="iconos" id="max${element.id}">
                                <a href="./verGifo.html"><img src="./imagenes/icon-max.svg" alt=""></a>
                                </div>
                            </div>
                            <div class="nameBox">
                                <h4>User</h3>
                                    <h3>Titulo</h2>
                            </div>
                        </div>
                    `;
                    debugger;
                    displayG.appendChild(base);
                   
                })
                
                    btn3 = document.getElementsByClassName('iconos');
                    debugger;
                    for (let i = 0; i < btn3.length; i++) {
                        btn3[i].addEventListener('click', testClick);
                    }
//testClick
            }).catch(function (err) {
                console.log(err.name, err.message)
                debugger;
            })
    }
}


function wierd (){
    //let helpGif = (this.id);
    //testClick(helpGif);
    testClick();
}





// fav

// downloads

//maxing

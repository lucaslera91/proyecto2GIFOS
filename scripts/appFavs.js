
let favHelper = 0;
let localFavs = JSON.parse(localStorage.getItem("favs"));
let displayG = document.getElementById("cont");
let sinFav = document.getElementById('titulo');
let btn7;
let btn6;

//debugger;
//alert('fuck');
if (JSON.parse(localStorage.getItem("favs") != null)) {
    favHelper = 1;
    //alert(localFavs);
    getGifId();
} else {
    if (localFavs == null) {
        sinFav.innerHTML = `<div id="noimagenfav">
        <h3>Favoritos</h3>
        <img src="./imagenes/icon-fav-sin-contenido.svg" alt="">
        <h3>Agrega tus gifos Favoritos!</h3>
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
        //debugger;
        fetch(`https://api.giphy.com/v1/gifs?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U&ids=${localFavs}`)
            .then(function (dato1) {
                result = dato1.json();
                return result;
            })
            .then(function (result) {

                let like = JSON.parse(localStorage.getItem("favs"));

                if(like == null){
                    like = [];
      
                  }
                let blueHeart;

                

                result.data.forEach(element => {

                    if(like.indexOf(element.id) == (-1)){
                        blueHeart = '<i class="far fa-heart"></i>'
                    }else{blueHeart = '<i class="fas fa-heart"></i>'}
                    base = document.createElement('div');
                    base.className = "base";
                    base.innerHTML =
                        `
                        <img class="embed" src="${element.images.fixed_height.url}" alt="">
                        <div class="overlay">
                            <div class="background"></div>
                            <div class="iconosBox">
                                <div class="iconosDelete" id="fav${element.id}">
                                    ${blueHeart}
                                </div>
                                <div class="iconos" id="dwl${element.id}">
                                    <img src="./imagenes/icon-download.svg" alt="">
                                </div>
                                <div class="iconos" id="max${element.id}">
                                <a href="./verGifo.html"><img src="./imagenes/icon-max.svg" alt=""></a>
                                </div>
                            </div>
                            <div class="nameBox">
                                <h4>${element.username}</h4>
                                    <h3>${element.title}</h3>
                            </div>
                        </div>
                    `;
                    //debugger;
                    displayG.appendChild(base);

                })
                btn6 = document.getElementsByClassName('iconosDelete');
                //debugger;
                for (let i = 0; i < btn6.length; i++) {
                    btn6[i].addEventListener('click', eliminarFav);
                }

                
                btn7 = document.getElementsByClassName('iconos');
                //debugger;
                for (let i = 0; i < btn7.length; i++) {
                    btn7[i].addEventListener('click', testClick);
                }
                //testClick
            }).catch(function (err) {
                console.log(err.name, err.message)
               // debugger;
            })
    }
}


function eliminarFav(){
    let idFav = this.id.slice(3);
  alert(idFav);
    let arrayFavorite = JSON.parse(localStorage.getItem("favs"));

    let favUpdate = eliminarDeLista(arrayFavorite, idFav);

    alert(favUpdate);

    localStorage.setItem("favs", JSON.stringify(favUpdate));

}



function wierd() {
    //let helpGif = (this.id);
    //testClick(helpGif);
    testClick();
}




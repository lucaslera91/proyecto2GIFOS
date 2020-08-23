
let favHelper = 0;
let localFavs = JSON.parse(localStorage.getItem("favs"));
let displayG = document.getElementById("cont");
let sinFav = document.getElementById('titulo');
let btn3;
let btn4;

debugger;
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
                let blueHeart;

                

                result.data.forEach(element => {

                    if(like.indexOf(element.id) == (-1)){
                        blueHeart = '<i class="far fa-heart"></i>'
                    }else{blueHeart = '<i class="fas fa-heart"></i>'}
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
                btn4 = document.getElementsByClassName('iconosDelete');
                //debugger;
                for (let i = 0; i < btn4.length; i++) {
                    btn4[i].addEventListener('click', eliminarFav);
                }

                
                btn3 = document.getElementsByClassName('iconos');
                //debugger;
                for (let i = 0; i < btn3.length; i++) {
                    btn3[i].addEventListener('click', testClick);
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

    localStorage.setItem("favs", JSON.stringify(favUpdate));

}


function eliminarDeLista(array, item){
    let arrayNuevo;
    for (let i = 0; i < array.length; i++) { if (array[i] === item) { 
        arrayNuevo = array.splice(i, 1); 
        }
    }
    return arrayNuevo;
}


// function testClick() {
//     // alert('should work');
//     //debugger;
//     let idend = this.id;
//     let idgif = idend.slice(3);
//     //alert(idend.slice(3));
//     //alert(idend.slice(0, 3));
//     if (idend.slice(0, 3) == 'fav') {
//         //alert('fav');
//         let favSave = JSON.parse(localStorage.getItem("favs"));
//         if (favSave != null) {
//             for (let i = 0; i < favSave.length; i++) {
                
//                 if(idgif != favSave[i] && idgif != ""){
//                 arrayFav.push(favSave[i]);
//                 //debugger;
//             }
            
//         } arrayFav.push(idgif);
//         localStorage.setItem("favs", JSON.stringify(arrayFav));
//     }
// }
    
//     if (idend.slice(0, 3) == 'dwl') {
//         //alert(idgif);
//         //ver como descargo esto...
//         //si es de fetch o de otro lado
//         //verGif(idgif, 1);
//         fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U`)
//             .then(function (dato1) {
//                 result = dato1.json();
//                 return result;
//             })
//             .then(function (result) {
//                 descargarG(`${result.data.images.original.url}`, result.data.title);
//             })
//             .catch(function (err) {
//                 console.log(err.name, err.message)
//                //debugger;
//             })

//     }
//     if (idend.slice(0, 3) == 'max') {
//         // debugger;
//         // alert('max');
//         //link a maximizar imagen
//         //fetch con este id en otra linea
//         localStorage.setItem("max", JSON.stringify(idgif));
//     }

// }

// async function descargarG(url,titulo) {
//     let blob = await fetch(`${url}`)
//     .then(r => r.blob());
//     invokeSaveAsDialog(blob, `${titulo}`);
//     console.log(blob);
// }









function wierd() {
    //let helpGif = (this.id);
    //testClick(helpGif);
    testClick();
}

 colorBlanco = '--colorBlanco';
 colorSecundario = '--colorSecundario';
 colorTitulo = '--colorTitulo';
 colorTrending = '--colorTrending';
 
// let logoIm2 = document.getElementById('idImg2');
// //logoIm.src = './imagenes/logo-desktop-modo-noc.svg';

// let colorBtnIndex2 = document.getElementById('darkIndex2');
// colorBtnIndex2.addEventListener('click', setTheme);
// themeColor;


// if (JSON.parse(localStorage.getItem("theme")) == null) {
//     localStorage.setItem("theme", JSON.stringify('Modo Diurno'));
// } else {
//     themeColor = JSON.parse(localStorage.getItem("theme"));
// }
// theme();
// function setTheme() {
//     themeColor = JSON.parse(localStorage.getItem("theme"));
//     //alert(colorBtnIndex.innerHTML);

//     if (themeColor == 'Modo Nocturno') {
//         colorDiurno();
//         //alert('rompe');
//     } else if (themeColor == 'Modo Diurno') {
//         colorDark();
//         //alert('hola');
//     }
// }


// function theme() {
//     let root;

//     themeColor = JSON.parse(localStorage.getItem("theme"));
//     //alert(colorBtnIndex.innerHTML);

//     if (themeColor == 'Modo Nocturno') {

//         root = document.querySelector(':root');
//         root.style.setProperty(colorTitulo, 'white');
//         root.style.setProperty(colorSecundario, 'white');
//         root.style.setProperty(colorBlanco, '#37383C');
//         root.style.setProperty(colorTrending, '#222326');
//         //colorBtnIndex.innerHTML = themeColor;
//         logoIm2.src = './imagenes/logo-desktop-modo-noc.svg';


//         //alert('rompe');
//     } else if (themeColor == 'Modo Diurno') {

//         root = document.querySelector(':root');
//         root.style.setProperty(colorTitulo, '#572EE5');
//         root.style.setProperty(colorSecundario, '#50E3C2');
//         root.style.setProperty(colorBlanco, '#ffffff');
//         root.style.setProperty(colorTrending, '#F3F5F8');
//         //colorBtnIndex.innerHTML = themeColor;
//         logoIm2.src = "./imagenes/logo-mobile.svg";

//         //alert('hola');
//     }
//     //./imagenes/logo-mobile.svg'
// }
// function colorDiurno() {
// let root;

//     root = document.querySelector(':root');
//     root.style.setProperty(colorTitulo, '#572EE5');
//     root.style.setProperty(colorSecundario, '#50E3C2');
//     root.style.setProperty(colorBlanco, '#ffffff');
//     root.style.setProperty(colorTrending, '#F3F5F8');
//     //colorBtnIndex.innerHTML = 'Modo Nocturno';

//     logoIm2.src = "./imagenes/logo-mobile.svg";
//     //logoIm.innerHTML = `<a href="index.html"><img id='idImg' src="./imagenes/logo-mobile.svg" alt="Imagen logo"></a>`;
//     localStorage.setItem("theme", JSON.stringify('Modo Diurno'));
// }
// function colorDark() {
// let root;

//     root = document.querySelector(':root');
//     root.style.setProperty(colorTitulo, 'white');
//     root.style.setProperty(colorSecundario, 'white');
//     root.style.setProperty(colorBlanco, '#37383C');
//     root.style.setProperty(colorTrending, '#222326');
//     //logoIm.innerHTML = `<a href="index.html"><img id='idImg' src="./imagenes/logo-desktop-modo-noc.svg" alt="Imagen logo"></a>`;
//     logoIm2.src = './imagenes/logo-desktop-modo-noc.svg';

//     //colorBtnIndex.innerHTML = 'Modo Diurno';
//     localStorage.setItem("theme", JSON.stringify('Modo Nocturno'));

// }








// fav

// downloads

//maxing

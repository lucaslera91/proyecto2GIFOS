
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


function wierd (){
    //let helpGif = (this.id);
    //testClick(helpGif);
    testClick();
}

let colorBlanco = '--colorBlanco';
let colorSecundario = '--colorSecundario';
let colorTitulo = '--colorTitulo';
let colorTrending = '--colorTrending';
let root;
let logoIm2 = document.getElementById('idImg2');
//logoIm.src = './imagenes/logo-desktop-modo-noc.svg';

let colorBtnIndex2 = document.getElementById('darkIndex2');
colorBtnIndex2.addEventListener('click', setTheme);
let themeColor;


if(JSON.parse(localStorage.getItem("theme")) == null){
    localStorage.setItem("theme", JSON.stringify('Modo Diurno'));
}else {
    themeColor= JSON.parse(localStorage.getItem("theme"));
}
theme();
function setTheme(){
    themeColor = JSON.parse(localStorage.getItem("theme"));
    //alert(colorBtnIndex.innerHTML);

    if (themeColor == 'Modo Nocturno') {
        colorDiurno();
        //alert('rompe');
    }else if (themeColor == 'Modo Diurno') {
        colorDark();
        //alert('hola');
    }
}


function theme() {

    themeColor = JSON.parse(localStorage.getItem("theme"));
    //alert(colorBtnIndex.innerHTML);

    if (themeColor == 'Modo Nocturno') {

        root = document.querySelector(':root');
        root.style.setProperty(colorTitulo, 'white');
        root.style.setProperty(colorSecundario, 'white');
        root.style.setProperty(colorBlanco, '#37383C');
        root.style.setProperty(colorTrending, '#222326');
        //colorBtnIndex.innerHTML = themeColor;
        logoIm2.src = './imagenes/logo-desktop-modo-noc.svg';

       
        //alert('rompe');
    }else if (themeColor == 'Modo Diurno') {
            root = document.querySelector(':root');
    root.style.setProperty(colorTitulo, '#572EE5');
    root.style.setProperty(colorSecundario, '#50E3C2');
    root.style.setProperty(colorBlanco, '#ffffff');
    root.style.setProperty(colorTrending, '#F3F5F8');
   //colorBtnIndex.innerHTML = themeColor;
    logoIm2.src = "./imagenes/logo-mobile.svg";
    
        //alert('hola');
    }
   //./imagenes/logo-mobile.svg'
}
function colorDiurno() {
    root = document.querySelector(':root');
    root.style.setProperty(colorTitulo, '#572EE5');
    root.style.setProperty(colorSecundario, '#50E3C2');
    root.style.setProperty(colorBlanco, '#ffffff');
    root.style.setProperty(colorTrending, '#F3F5F8');
    //colorBtnIndex.innerHTML = 'Modo Nocturno';
    
    logoIm2.src = "./imagenes/logo-mobile.svg";
    //logoIm.innerHTML = `<a href="index.html"><img id='idImg' src="./imagenes/logo-mobile.svg" alt="Imagen logo"></a>`;
    localStorage.setItem("theme", JSON.stringify('Modo Diurno'));
}
function colorDark() {
    root = document.querySelector(':root');
    root.style.setProperty(colorTitulo, 'white');
    root.style.setProperty(colorSecundario, 'white');
    root.style.setProperty(colorBlanco, '#37383C');
    root.style.setProperty(colorTrending, '#222326');
    //logoIm.innerHTML = `<a href="index.html"><img id='idImg' src="./imagenes/logo-desktop-modo-noc.svg" alt="Imagen logo"></a>`;
    logoIm2.src = './imagenes/logo-desktop-modo-noc.svg';
    
    //colorBtnIndex.innerHTML = 'Modo Diurno';
    localStorage.setItem("theme", JSON.stringify('Modo Nocturno'));

}








// fav

// downloads

//maxing

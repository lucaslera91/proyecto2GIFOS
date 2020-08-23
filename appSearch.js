let test = document.getElementById("search1");
let buscador = document.getElementById("searchBnt");
let botonVerMas = document.getElementById("verMas");
let tituloBusqueda = document.getElementById('searchtitle');
let busqueda;
let verMas = 0;
let disp = document.getElementById("cont");
let btnFav;
let btnDownload;
let btnFullSize;
let btn;
let colorBlanco = '--colorBlanco';
let colorSecundario = '--colorSecundario';
let colorTitulo = '--colorTitulo';
let colorTrending = '--colorTrending';
let root;
let logoIm = document.getElementById('idImg');

//logoIm.src = './imagenes/logo-desktop-modo-noc.svg';

let colorBtnIndex = document.getElementById('darkIndex');
colorBtnIndex.addEventListener('click', setTheme);
let themeColor;


if (JSON.parse(localStorage.getItem("theme")) == null) {
    localStorage.setItem("theme", JSON.stringify('Modo Diurno'));
} else {
    themeColor = JSON.parse(localStorage.getItem("theme"));
}
theme();
function setTheme() {
    themeColor = JSON.parse(localStorage.getItem("theme"));
    //alert(colorBtnIndex.innerHTML);

    if (themeColor == 'Modo Nocturno') {
        colorDiurno();
        //alert('rompe');
    } else if (themeColor == 'Modo Diurno') {
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
        logoIm.src = './imagenes/logo-desktop-modo-noc.svg';


        //alert('rompe');
    } else if (themeColor == 'Modo Diurno') {
        root = document.querySelector(':root');
        root.style.setProperty(colorTitulo, '#572EE5');
        root.style.setProperty(colorSecundario, '#50E3C2');
        root.style.setProperty(colorBlanco, '#ffffff');
        root.style.setProperty(colorTrending, '#F3F5F8');
        //colorBtnIndex.innerHTML = themeColor;
        logoIm.src = "./imagenes/logo-mobile.svg";

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

    logoIm.src = "./imagenes/logo-mobile.svg";
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
    logoIm.src = './imagenes/logo-desktop-modo-noc.svg';

    //colorBtnIndex.innerHTML = 'Modo Diurno';
    localStorage.setItem("theme", JSON.stringify('Modo Nocturno'));

}


let contenedorSugerengciaSearch = document.getElementById('suggestionBox');

if (buscador != null) {
    buscador.addEventListener("click", searchtitle);
    buscador.addEventListener("click", guardarValue);
    buscador.addEventListener("click", resetGifs);
    buscador.addEventListener("click", resetSearch);
    buscador.addEventListener("click", function () { testing(busqueda) });
}
botonVerMas.addEventListener("click", doceMas);
botonVerMas.addEventListener("click", function () { testing(busqueda) });

let base;

function doceMas() {
    //debugger;
    verMas += 12;
    //alert(verMas)

}

function guardarValue() {
    busqueda = test.value;
    return busqueda;
}



function resetSearch() {
    test.value = "";
    verMas = 0;
}


function resetGifs() {
    disp.innerHTML = '';
    contenedorSugerengciaSearch.innerHTML = "";
}

function searchtitle() {

    tituloBusqueda.innerHTML = test.value;
}



//let disp2 = document.getElementById("cont2");
//debugger;

function testing(busqueda) {
    //alert("yes");
    //debugger;
    let countsearch = 0;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U&q=${busqueda}&limit=12&offset=${verMas}`)
        .then(function (dato1) {
            result = dato1.json();
            return result;
        })
        .then(function (result) {

            if(result.data.length == 0){

                disp.innerHTML = `<div class="listasVacias" ><img src="./imagenes/icon-busqueda-sin-resultado.svg" alt="">
                <h3> Indenta con otra busqueda</h3></div>`;

                botonVerMas.style.display = "none";
            }else{
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
                                <div class="iconos" id="fav${element.id}">
                                    <img src="" alt="">${blueHeart}
                                </div>
                                <div class="iconos" id="dwl${element.id}">
                                <img src="./imagenes/icon-download.svg" alt="">
                                </div>
                                <div class="iconos" id="max${element.id}">
                                <a href="./verGifo.html"><img src="./imagenes/icon-max.svg" alt=""></a>
                                </div>
                                
                            </div>
                            <div class="nameBox">
                                <h4>${element.username}</h3>
                                    <h3>${element.title}</h2>
                            </div>
                        </div>
                    `;

                disp.appendChild(base);

                countsearch++;
            });
            btn = document.getElementsByClassName('iconos');
            //debugger;
            for (let i = 0; i < btn.length; i++) {
                btn[i].addEventListener('click', testClick);
            }
            if (verMas + 12 >= parseInt(result.pagination.total_count)) {
                //alert("last items");
                botonVerMas.style.display = "none";

            } else {
                //alert(result.pagination.total_count);
                botonVerMas.style.display = "flex";
            }

        }
    })
    
        .catch(function (err) {
            console.log("error");
        });
}

let arrayFav = [];

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
            let auxFav;
            for (let i = 0; i < favSave.length; i++) {
                arrayFav.push(favSave[i]);
                //debugger;
            }
            auxFav = verificarFav(arrayFav, idgif);
            if (auxFav == false && idgif != "") {
                arrayFav.push(idgif);
                //debugger;
            } else { alert('repetido') }
            //debugger;

        } else if (favSave === null) {
            debugger;
            alert('its doing it');
            arrayFav.push(idgif)
        };

        localStorage.setItem("favs", JSON.stringify(arrayFav));
        arrayFav = [];
    }
    if (idend.slice(0, 3) == 'dwl') {

        fetch(`https://api.giphy.com/v1/gifs/${idgif}?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U`)
            .then(function (dato1) {
                result = dato1.json();
                return result;
            })
            .then(function (result) {
                debugger;
                descargarG(`${result.data.images.original.url}`, result.data.title);
            })
            .catch(function (err) {
                console.log(err.name, err.message)
               //debugger;
            })

    }
    if (idend.slice(0, 3) == 'max') {
        // debugger;
        // alert('max');
        //link a maximizar imagen
        //fetch con este id en otra linea
        debugger;
        localStorage.setItem("max", JSON.stringify(idgif));
    }
}

async function descargarG(url,titulo) {
    let blob = await fetch(`${url}`)
    .then(r => r.blob());
    invokeSaveAsDialog(blob, `${titulo}`);
    console.log(blob);
}


function verificarFav(listaLS, id) {
    let contarFavs = 0;
    let auxFavorito = false;
    alert(listaLS.length);
    do{
        if(listaLS[contarFavs] == id){
            auxFavorito = true;
            console.log(auxFavorito);
        }
        console.log(contarFavs);
        contarFavs++;
    }while (contarFavs < listaLS.length && auxFavorito == false);


return auxFavorito;
}


let liSearch;
let searchHelp;
let line = document.getElementById('line');
window.addEventListener('scroll', function () {
    line = document.getElementById('line');
    liSearch = document.getElementById('liSearch');
    searchHelp = document.getElementById('searchHelp');

    if (test.value.length != 0) {

    } else {

        if (isInViewport(line) == false) {

            //liSearch = document.getElementById('liSearch');
            // searchHelp = document.getElementById('searchHelp');
            liSearch.innerHTML = `<div class="searchBar">
    <input type="text" id="search1" list="datalist1" placeholder="Busca GIFOS y mas">
    <img id="searchBnt" src="./imagenes/icon-search.svg" alt="lupa">
    <ul class="suggestions" id='suggestionBox'>
    </ul>
 </datalist>
</div>`;
            searchHelp.innerHTML = "";
            test = document.getElementById("search1");

            //alert(isInViewport(test));
        } else {

            liSearch.innerHTML = '';
            //test = document.getElementById("search1");
            searchHelp.innerHTML = `<div class="searchBar">
<input type="text" id="search1" list="datalist1" placeholder="Busca GIFOS y mas">
<img id="searchBnt" src="./imagenes/icon-search.svg" alt="lupa">
<ul class="suggestions" id='suggestionBox'>
</ul>
</datalist>
</div>`;
            test = document.getElementById("search1");

        }
        buscador = document.getElementById("searchBnt");
        if (buscador != null) {
            buscador.addEventListener("click", searchtitle);
            buscador.addEventListener("click", guardarValue);
            buscador.addEventListener("click", resetGifs);
            buscador.addEventListener("click", resetSearch);
            buscador.addEventListener("click", function () { testing(busqueda) });
        }

    }
});
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}







// CORAZONES

// <i class="far fa-heart"></i> SIN RELLENO 
//<i class="fas fa-heart"></i> CON RELLENO

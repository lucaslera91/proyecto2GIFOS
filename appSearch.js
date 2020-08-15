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
let root;
let colorBtnIndex = document.getElementById('darkIndex');
colorBtnIndex.addEventListener('click', theme);
let themeColor;

if(JSON.parse(localStorage.getItem("theme")) == null){
    localStorage.setItem("theme", JSON.stringify('Modo Diurno'));
}else {
    themeColor= JSON.parse(localStorage.getItem("theme"));
}
theme();
function theme() {
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
function colorDiurno() {
    root = document.querySelector(':root');
    root.style.setProperty(colorTitulo, '#572EE5');
    root.style.setProperty(colorSecundario, '#50E3C2');
    root.style.setProperty(colorBlanco, '#ffffff');
    colorBtnIndex.innerHTML = 'Modo Nocturno';
    localStorage.setItem("theme", JSON.stringify('Modo Diurno'));
}
function colorDark() {
    root = document.querySelector(':root');
    root.style.setProperty(colorTitulo, 'red');
    root.style.setProperty(colorSecundario, 'white');
    root.style.setProperty(colorBlanco, 'darkblue');
    colorBtnIndex.innerHTML = 'Modo Diurno';
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

                disp.appendChild(base);

                countsearch++;
            });
            btn = document.getElementsByClassName('iconos');
            debugger;
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
            for (let i = 0; i < favSave.length; i++) {
                arrayFav.push(favSave[i]);
                debugger;
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
        debugger;
        // alert('max');
        //link a maximizar imagen
        //fetch con este id en otra linea
        localStorage.setItem("max", JSON.stringify(idgif));
    }
}

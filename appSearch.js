let test = document.getElementById("search1");
let buscador = document.getElementById("searchBnt");
let botonVerMas = document.getElementById("verMas");
let tituloBusqueda = document.getElementById('searchtitle');
let busqueda;
let verMas = 0;
let disp = document.getElementById("cont");


buscador.addEventListener("click", searchtitle);
buscador.addEventListener("click", guardarValue);
buscador.addEventListener("click", resetGifs);
buscador.addEventListener("click", resetSearch);
buscador.addEventListener("click", function(){testing(busqueda)});

botonVerMas.addEventListener("click", doceMas);
botonVerMas.addEventListener("click", function(){testing(busqueda)});

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

}

function searchtitle() {

    tituloBusqueda.innerHTML = test.value;
}

//let disp2 = document.getElementById("cont2");
//debugger;

function testing(busqueda) {
    //alert("yes");
    //debugger;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U&q=${busqueda}&limit=12&offset=${verMas}`)
        .then(function (dato1) {
            result = dato1.json();
            return result;
        })
        .then(function (result) {
            result.data.forEach(element => {
            
            base = document.createElement('div');
            
            base.className = "base";
                //`<img src="${element.images.fixed_height.url}" type="">`;
                base.innerHTML =
                    `
                        <img class="embed" src="${element.images.fixed_height.url}" alt="">
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
                                    <img src="./imagenes/icon-max.svg" alt="">
                                </div>
                            </div>
                            <div class="nameBox">
                                <h4>User</h3>
                                    <h3>Titulo</h2>
                            </div>
                        </div>
                    `;

                    disp.appendChild(base);

            });
            debugger;
            if (verMas + 12 >= parseInt(result.pagination.total_count)){
                //alert("last items");
                botonVerMas.style.display = "none";
                
            }else{
               //alert(result.pagination.total_count);
            botonVerMas.style.display = "flex";
            }

        })
        .catch(function (err) {
            console.log("error");
        });
}
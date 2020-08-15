let displayTrend = document.getElementById('contenerTrending');

let vista;
let vistaImg;
let contador = 1;
let width;
let wide;
let wideTest;
let aux;
let panic = 0;
let eje;
let arrayWidth = [];
let sumWidth = 0;
let contadorAuxiliar;
let preGif = document.createElement("div");
let postGif = document.createElement("div");
let widthArray2 = [];
let btn2;
let arrayTrending = [];


//let displayTrend = 
window.onload = testingtrend;

function testingtrend() {
    //alert("yes");
    //debugger;
    
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U&rating=r`)
        .then(function (dato1) {
            result = dato1.json();
            return result;
        })
        .then(function (result) {
            //let count = 0;
            //let auxTrend = document.createElement('div');

            for (let i = 0; i < result.data.length; i++) {
                //`<img src="${element.images.fixed_height.url}" type="">`;
                displayTrend.innerHTML += `
                <div class="trendingGIFOS" id="${i}">
                            <img class="embedT" src="${result.data[i].images.fixed_height.url}" alt="">
                            <div class="overlayT">
                            <div class="iconosBoxT">
                            <div class="iconosT" id="fav${result.data[i].id}">
                            <img src="./imagenes/icon-fav-hover.svg" alt="">
                        </div>
                        <div class="iconosT" id="dwl${result.data[i].id}">
                        <img src="./imagenes/icon-download.svg" alt="">
                        </div>
                        <div class="iconosT" id="max${result.data[i].id}">
                        <a href="./verGifo.html"><img src="./imagenes/icon-max.svg" alt=""></a>
                        </div>
                                <div class="nameBoxT">
                                    <h4>User</h3>
                                        <h3>Titulo</h2>
                                </div>
                            </div>
                        </div>`;
                //displayTrend.appendChild(auxTrend);
                               
                
                         sumWidth += parseInt(result.data[i].images.fixed_height.width);
            
                         //alert(sumWidth);
            
                         arrayWidth.push(sumWidth);

                //debugger;

        
                arrayTrending.push(i);

            }


           
           //
            //alert(arrayWidth);

            //for (let i = 0; i < result.data.length; i++) {

            preGif.className = "trendingGIFOS";
            preGif.id = "last";

            preGif.innerHTML = `
                <div >
                            <img class="embedT" src="${result.data[arrayTrending.length - 1].images.fixed_height.url}" alt="">
                            <div class="overlayT">
                            <div class="iconosBoxT">
                            <div class="iconosT" id="fav${result.data[arrayTrending.length - 1].id}">
                            <img src="./imagenes/icon-fav-hover.svg" alt="">
                        </div>
                        <div class="iconosT" id="dwl${result.data[arrayTrending.length - 1].id}">
                        <img src="./imagenes/icon-download.svg" alt="">
                        </div>
                        <div class="iconosT" id="max${result.data[arrayTrending.length - 1].id}">
                        <a href="./verGifo.html"><img src="./imagenes/icon-max.svg" alt=""></a>
                        </div>
                                <div class="nameBoxT">
                                    <h4>User</h3>
                                        <h3>Titulo</h2>
                                </div>
                            </div>
                        </div>`;

            displayTrend.prepend(preGif);


            postGif.className = "trendingGIFOS";
            postGif.id= "first";

            postGif.innerHTML = `
                <div  >
                            <img class="embedT" src="${result.data[0].images.fixed_height.url}" alt="">
                            <div class="overlayT">
                                <div class="iconosBoxT">
                                <div class="iconosT" id="fav${result.data[0].id}">
                                <img src="./imagenes/icon-fav-hover.svg" alt="">
                            </div>
                            <div class="iconosT" id="dwl${result.data[0].id}">
                            <img src="./imagenes/icon-download.svg" alt="">
                            </div>
                            <div class="iconosT" id="max${result.data[0].id}">
                            <a href="./verGifo.html"><img src="./imagenes/icon-max.svg" alt=""></a>
                            </div>
                                <div class="nameBoxT">
                                    <h4>User</h3>
                                        <h3>Titulo</h2>
                                </div>
                            </div>
                        </div>`;
            //lert("try");

            displayTrend.appendChild(postGif);

            //debugger;
            panic = 1;

            auxPanic();
            btn2 = document.getElementsByClassName('iconosT');
            debugger;

            for (let i = 0; i < btn2.length; i++) {
                //alert('working');
                debugger;
                btn2[i].addEventListener('click', testClick);
                //alert('working');
            }
        })

        .catch(function (err) {
            console.log("error");
        });
}




//alert(panic);
function auxPanic() {
    if (panic != 0) {

        //alert(panic);
        //debugger;
        //width = vistaImg[count(contador)].clientWidth;
        wide = document.getElementById('trendingMain');
        vista = document.getElementById('contenerTrending');
        contador = 1;
        //alert(vista.id);
        wideTest = wide.clientWidth;
        aux = arrayWidth[contador]/ wideTest;
        //alert(width);
        //alert(vistaImg[0]);

       vistaImg = document.getElementsByClassName('trendingGIFOS');
        

        width = sumWidth / vistaImg.length;
        //alert(width);
        vista.style.left = aux + "%";
    
        vista.style.transform = "translateX(" + (- arrayWidth[0]-10) + "px)";

        //
        //vista.style.left = aux + "%";
        //setTimeout(arraywid(),5000);
        let btnPrev = document.getElementById('previousTrend');
        let btnNext = document.getElementById('nextTrend');
        
        btnPrev.addEventListener("click", previo);
        btnNext.addEventListener("click", siguiente);
        btnPrev.addEventListener("click", efect);
        btnNext.addEventListener("click", efect);
        window.addEventListener('resize', auxSize)
    }
}
// try {
//     width = vistaImg[0].clientWidth;

//     vistaImg = document.getElementsByClassName('.trendingGIFOS');
//     wide = document.getElementById('trendingMain');
//     vista = document.getElementById('contenerTrending');
//     contador = 1;
//     //alert(vista.id);
//     width = vistaImg[0].clientWidth;
//     wideTest = wide.clientWidth;
//     aux = width / wideTest;
//     //alert(vistaImg[0]);
//     vista.style.left = aux + "%";
// } catch (error) {
//     console.log(error);
// }


//fetchTry();
//debugger;
// ---------- ------------ ////// 
// ---------- ------------ ////// 
//        carrusel
// ---------- ------------ ////// 
// ---------- ------------ ////// 


//alert(aux);
////alert(wide.id);
//alert(wideTest);

//alert(width);
//vista.style.transform =  "translateX(" + (-width * contador) + "px)";
//vista.style.left = aux + "%";
//let combinedData = {"apiRequest1":{},"apiRequest2:{}};

// async function getUserAsync(name) {
//     let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U&q`);
//     let data = await response.json()
//     try {
//         alert("this worded");

//     } catch (error) {
//         console.log(error);
//         alert("this cannot still happen");
//     }

//     return data;
// }

//debugger;

function auxSize() {
    if (panic != 0) {
        try {
           //alert("try");

            //alert("yes");
            // alert(aux);
            vista.style.left = aux + "%";
            //eje = vistaImg[count(contador)].clientWidth;
            siguiente();
            previo();

            //vista.style.transform = "translateX(" +  + "px)";

        } catch (error) {
            console.log(error);
        }
    }
}

// function arraywid() {
//     if (panic != 0) {

//         for (let i = 0; i < vistaImg.length; i++) {
//             //alert(vistaImg[i].clientWidth);            
            
//             sumWidth += vistaImg[i].clientWidth;

//             //alert(sumWidth);

//             arrayWidth.push(sumWidth);
//         }
//     }

   
// }

function previo() {
    if (panic != 0) {
        try {
        //width = arrayWidth[0];

            //alert(arrayWidth[contador]);
            //width= arrayWidth[contador];
            vista.style.left = aux + "%";

            if (contador <= 0) return;
            contador--;
            vista.style.transition = "ease-in-out 0.3s"
            
            //vista.style.left = -arrayWidth[contador] + "px";

            vista.style.transform = "translateX(" + (- width * contador) + "px)";
            //vista.style.left = (-aux * contador * 100) + "%";
            console.log(contador);
            console.log(eje);
            //alert(width);
        } catch (error) {
            console.log(error);
        }
    }
}
function siguiente() {
    if (panic != 0) {
        try {
        //width = arrayWidth[0];

           
            //width= arrayWidth[contador];

            console.log(arrayWidth[contador]);
            if (contador >= vistaImg.length-1) return;
          
            contador++;
            vista.style.transition = "ease-in-out 0.3s"
            //vista.style.left = -arrayWidth[contador+1] + "px";
            vista.style.transform = "translateX(" + (- width * contador) + "px)";

        }catch (error) {
            console.log(error);
        }
    }
    }
// function count(contador) {
//     contadorAuxiliar = (contador ^ 2) ^ 1/2;
//     return contadorAuxiliar;
// }
// function efect() {
//     console.log(contador);
//     //console.log(vistaImg[contador].id);

//     if (vistaImg[contador].id === 'last') {
//         console.log(vistaImg[contador].id);
//         //eje = -vistaImg[count(contador)].clientWidth;
//         console.log(contador);
//         // if (vistaImg[contador].id === "0") {
//         vista.style.transition = 'none';
//         contador = vistaImg.length - 2;
//         //vista.style.transform = "translateX(" + (eje) + "px)";
//     }
//     if (vistaImg[contador].id === 'first') {

//         // if (vistaImg[contador].id === arrayTrending.length - 1 ) {
//         vista.style.transition = 'none';
//         contador = vistaImg.length - contador;
//         //vista.style.transform = "translateX(" + (eje) + "px)";
//         vista.style.left = -arrayWidth[contador-2] + "px";
//     }
// }

function efect() {

    if (vistaImg[contador].id === 'last') {
        vista.style.transition = 'none';
        contador = vistaImg.length - 2;
        vista.style.transform = "translateX(" + (-width * contador) + "px)";
    }
    if (vistaImg[contador].id === 'first') {
        vista.style.transition = 'none';
        contador = vistaImg.length-1 - contador;
        vista.style.transform = "translateX(" + (-width * contador) + "px)";


    }
}




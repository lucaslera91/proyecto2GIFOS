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

let start;
let stopX;




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
            //debugger;
            let like = JSON.parse(localStorage.getItem("favs"));
           

            alert('all good');

            for (let i = 0; i < result.data.length; i++) {

                let blueHeart;

                if(like.indexOf(result.data[i].id) == (-1)){
                    blueHeart = '<i class="far fa-heart"></i>'
                }else{blueHeart = '<i class="fas fa-heart"></i>'}

                //`<img src="${element.images.fixed_height.url}" type="">`;
                displayTrend.innerHTML += `
                <div class="trendingGIFOS" id="${i}">
                     <img class="embedT" src="${result.data[i].images.fixed_height.url}" alt="">
                     <div class="overlayT">
                        <div class="iconosBoxT">
                            <div class="iconosT" id="fav${result.data[i].id}">
                                <img src="" alt="">${blueHeart}
                            </div>
                            <div class="iconosT" id="dwl${result.data[i].id}">
                                <img src="./imagenes/icon-download.svg" alt="">
                            </div>
                            <div class="iconosT" id="max${result.data[i].id}">
                                <a href="./verGifo.html">
                                    <img src="./imagenes/icon-max.svg" alt="">
                                </a>
                            </div>
                        </div>

                        <div class="nameBoxT">
                            <h4>${result.data[i].username}</h4>
                            <h3>${result.data[i].title}</h3>
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
                        <div>
                            <img class="embedT" src="${result.data[arrayTrending.length - 1].images.fixed_height.url}" alt="">
                            <div class="overlayT">
                                <div class="iconosBoxT">
                                    <div class="iconosT" id="fav${result.data[arrayTrending.length - 1].id}">
                                        <img src="" alt=""><i class="far fa-heart"></i>
                                    </div>
                                    <div class="iconosT" id="dwl${result.data[arrayTrending.length - 1].id}">
                                        <img src="./imagenes/icon-download.svg" alt="">
                                    </div>
                                    <div class="iconosT" id="max${result.data[arrayTrending.length - 1].id}">
                                        <a href="./verGifo.html"><img src="./imagenes/icon-max.svg" alt=""></a>
                                    </div>
                                </div>
                                <div class="nameBoxT">
                                    <h4>${result.data[arrayTrending.length - 1].username}</h4>
                                    <h3>${result.data[arrayTrending.length - 1].title}</h3>
                                </div>
                            </div>
                        </div>`;

            displayTrend.prepend(preGif);


            postGif.className = "trendingGIFOS";
            postGif.id = "first";

            postGif.innerHTML = `
                <div>
                    <img class="embedT" src="${result.data[0].images.fixed_height.url}" alt="">
                    <div class="overlayT">
                         <div class="iconosBoxT">
                            <div class="iconosT" id="fav${result.data[0].id}">
                                <img src="" alt=""><i class="far fa-heart"></i>
                            </div>
                            <div class="iconosT" id="dwl${result.data[0].id}">
                                <img src="./imagenes/icon-download.svg" alt="">
                            </div>
                            <div class="iconosT" id="max${result.data[0].id}">
                                <a href="./verGifo.html">
                                    <img src="" alt=""><i class="far fa-heart"></i>
                                </a>
                            </div>
                        </div>
                        <div class="nameBoxT">
                            <h4>${result.data[0].username}</h4>
                            <h3>${result.data[0].title}</h3>
                        </div>
                    </div>
                </div>`;
            //lert("try");

            displayTrend.appendChild(postGif);

            //debugger;
            panic = 1;

            auxPanic();
            btn2 = document.getElementsByClassName('iconosT');
            //debugger;

            for (let i = 0; i < btn2.length; i++) {
                //alert('working');
                //debugger;
                btn2[i].addEventListener('click', testClick);
                //alert('working');
            }
            for (let i = 0; i < vistaImg.length; i++) {
                vistaImg[i].addEventListener('touchstart', (e) => {
                    //alert('holas');
                    //debugger;
                    let eventStart = e.touches;
                    start = parseInt(eventStart[0].screenX);

                    //parseInt(start[0].screenX);
                }, false);

                vistaImg[i].addEventListener('touchend', (e) => {
                    //e.preventDefault();
                    let touchEvent = e.TouchEvent;
                    touch = parseInt(e.changedTouches[0].clientX);
                    change = start - touch;
                    //alert(change);
                    if (change < 0) {
                        //left
                        previo();
                        //alert('a');

                    } else if (change > 0) {
                        //right
                        siguiente();
                        //alert('b');
                    }
                    //alert(2);
                });
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
        aux = arrayWidth[contador] / wideTest;
        //alert(width);
        //alert(vistaImg[0]);

        vistaImg = document.getElementsByClassName('trendingGIFOS');


        width = sumWidth / vistaImg.length;
        //alert(width);
        vista.style.left = aux + "%";

        vista.style.transform = "translateX(" + (- arrayWidth[0] - 10) + "px)";

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
            touchSlide();
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
            if (contador >= vistaImg.length - 1) return;

            contador++;
            vista.style.transition = "ease-in-out 0.3s"
            //vista.style.left = -arrayWidth[contador+1] + "px";
            vista.style.transform = "translateX(" + (- width * contador) + "px)";

        } catch (error) {
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
        contador = vistaImg.length - 1 - contador;
        vista.style.transform = "translateX(" + (-width * contador) + "px)";


    }
}
// let change;

// // function touchSlide() {
//     vistaImg[contador].addEventListener('touchstart', (e) => {
//         alert('holas');
//         start = e.clientX
//     }, false);

//     vistaImg[contador].addEventListener('touchend', (e) => {
//         e.preventDefault();
//         let touch = e.clientX;
//         change = start - touch;
//         if (change > 0) {
//             //left
//             previo();
//             alert('a');
//         } else if (change < 0) {
//             //right
//             siguiente();
//             alert('b');
//         }
//     }, false);



// function slideShow() {
//     if (change > 0) {
//         //left
//         previo();
//         alert('a');
//     } else if (change < 0) {
//         //right
//         siguiente();
//         alert('b');
//     }
//     alert('c');
// }





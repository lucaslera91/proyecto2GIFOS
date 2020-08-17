let start = 0;
let capaBtnStart = 5;
let capaBtnStop = 4;
let videoSave;
let show;
let grabar = document.getElementById('grabar');
let recorder;
start = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let subirGifBtn = document.getElementById('subir');
let formData= new FormData;
let misGifos = [];
let gifFile;
let formulario = document.getElementById('form');
let apiKey = 'JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U';

grabar.addEventListener('click', getStreamAndRecord);
if (start != 0) {
    start.addEventListener('click', getStreamAndRecord);
}

function getStreamAndRecord() {
    grabar.style.zIndex = "-100";
    //alert('camara');
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: { max: 1200 }
        }
    })
        .then(function (stream) {
            let video = document.querySelector('video');
            video.srcObject = stream;
            video.play();
            show = document.getElementById('show');
            show.style.zIndex = capaBtnStart;
            videoSave = document.getElementById('videoSave');
        })
        .catch(function (err) {
            console.log(err.name, err.message)
        });
}

grabar.addEventListener('click', function () {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    }).then(function (stream) {
        grabar.style.zIndex = -5;
        let recorder = RecordRTC(stream, {
            type: 'gif'
        });
        start.addEventListener('click', function (ev) {
            recorder.startRecording();
            console.log(recorder.state);
            capaBtnStop = capaBtnStop + 2;
            stopBtn.style.zIndex = capaBtnStop;
        });
        stopBtn.addEventListener('click', function (ev) {
            recorder.stopRecording();

            let blob = recorder.getBlob();
            debugger;
        //     formulario.inneHTML = `<form class='form' id='myForm'>
        //     <input type="file" id="gifFile">
        // </form>`;
           //gifFile = document.getElementById('file');
            //invokeSaveAsDialog(blob);

            formData.append('file', blob);
            formData.append('api_key', apiKey);
           uploadFile(form);

            console.log(blob);
            let videoURL = window.URL.createObjectURL(blob);


            videoSave.src = videoURL;
            videoSave.style.zIndex = capaBtnStop;
            capaBtnStart = capaBtnStart + 2;
            start.style.zIndex = capaBtnStart;
            console.log(videoURL);
            subirGifBtn.style.zIndex = capaBtnStart + 1;
            fileReader = new FileReader();

            fileReader.onload = function (evt) {
            //Read out file contents as a Data URL
            let result = evt.target.result;
            videoSave.setAttribute("src", result);
            localStorage.setItem("video2", result);
            }

            fileReader.readAsDataURL(blob);

            subirGifBtn.addEventListener('click', () => { addToMyGifs(videoSave); });

            
            alert("seguimos ok");
        })


            
    })
    .catch(function (err) {
        console.log(err.name, err.message)
    })

});
function uploadFile(form){
    debugger;
fetch('upload.giphy.com/v1/gifs?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U',{
    method: 'POST',
    body: form
}).catch(console.error);






}
//-------------------------------
//-------------------------------
//-------------------------------

// --- AÑADIR A MIS GIFOS

//-------------------------------


// function testMyGifs() {
//     if(localStorage.getItem("misGifs") != null) {
//     listaGifs = JSON.parse(localStorage.getItem("misGifs"));
//     //cuantosGifs++;
//     for(let i = 0; i<listaGifs.length; i++)
//     misGifos.push(listaGifs[i]);
//     }
// }
//testMyGifs();


// let cuantosGifs = 0;
// function addToMyGifs(url) {
//     if(localStorage.getItem("misGifs") != null) {
//     listaGifs = JSON.parse(localStorage.getItem("misGifs"));
//     //cuantosGifs++;
//     for(let i = 0; i<listaGifs.length; i++)
//     misGifos.push(listaGifs[i]);
//     }
//     misGifos.push(videoSave.src);

//     localStorage.setItem("misGifs", JSON.stringify(misGifos));

//     alert("posible exito");
// }



// fileReader.onload = function (evt) {
//     // Read out file contents as a Data URL
//     var result = evt.target.result;
//     // Set image src to Data URL
//     rhino.setAttribute("src", result);
//     // Store Data URL in localStorage
//     try {
//         localStorage.setItem("rhino", result);










// let xhr = new XMLHttpRequest(),
//         blob,
//         fileReader = new FileReader();

//     xhr.open("GET", "rhino.png", true);
//     // Set the responseType to arraybuffer. "blob" is an option too, rendering manual Blob creation unnecessary, but the support for "blob" is not widespread enough yet
//     xhr.responseType = "arraybuffer";

//     fileReader.readAsDataURL(blob);

//     xhr.send();

// //     xhr.addEventListener("load", function () {
// //         if (xhr.status === 200) {
// //             // Create a blob from the response
// //             blob = new Blob([xhr.response], {type: "image/png"});

// //             // onload needed since Google Chrome doesn't support addEventListener for FileReader
// //             fileReader.onload = function (evt) {
// //                 // Read out file contents as a Data URL
// //                 var result = evt.target.result;
// //                 // Set image src to Data URL
// //                 rhino.setAttribute("src", result);
// //                 // Store Data URL in localStorage
// //                 try {
// //                     localStorage.setItem("rhino", result);
// //                 }
// //                 catch (e) {
// //                     console.log("Storage failed: " + e);
// //                 }
// //             };
// //             // Load blob as Data URL
// //             fileReader.readAsDataURL(blob);
//         }
//     }, false);
//     // Send XHR
//     xhr.send();
// }


// let colorBlanco = '--colorBlanco';
// let colorSecundario = '--colorSecundario';
// let colorTitulo = '--colorTitulo';
// let colorTrending = '--colorTrending';
// let root;
// let logoIm4 = document.getElementById('idImg4');
// //logoIm.src = './imagenes/logo-desktop-modo-noc.svg';

// let colorBtnIndex4 = document.getElementById('darkIndex4');
// colorBtnIndex4.addEventListener('click', setTheme);
// let themeColor;


// if(JSON.parse(localStorage.getItem("theme")) == null){
//     localStorage.setItem("theme", JSON.stringify('Modo Diurno'));
// }else {
//     themeColor= JSON.parse(localStorage.getItem("theme"));
// }
// theme();
// function setTheme(){
//     themeColor = JSON.parse(localStorage.getItem("theme"));
//     //alert(colorBtnIndex.innerHTML);

//     if (themeColor == 'Modo Nocturno') {
//         colorDiurno();
//         //alert('rompe');
//     }else if (themeColor == 'Modo Diurno') {
//         colorDark();
//         //alert('hola');
//     }
// }


// function theme() {

//     themeColor = JSON.parse(localStorage.getItem("theme"));
//     //alert(colorBtnIndex.innerHTML);

//     if (themeColor == 'Modo Nocturno') {

//         root = document.querySelector(':root');
//         root.style.setProperty(colorTitulo, 'white');
//         root.style.setProperty(colorSecundario, 'white');
//         root.style.setProperty(colorBlanco, '#37383C');
//         root.style.setProperty(colorTrending, '#222326');
//         //colorBtnIndex.innerHTML = themeColor;
//         logoIm4.src = './imagenes/logo-desktop-modo-noc.svg';

       
//         //alert('rompe');
//     }else if (themeColor == 'Modo Diurno') {
//             root = document.querySelector(':root');
//     root.style.setProperty(colorTitulo, '#572EE5');
//     root.style.setProperty(colorSecundario, '#50E3C2');
//     root.style.setProperty(colorBlanco, '#ffffff');
//     root.style.setProperty(colorTrending, '#F3F5F8');
//    //colorBtnIndex.innerHTML = themeColor;
//     logoIm4.src = "./imagenes/logo-mobile.svg";
    
//         //alert('hola');
//     }
//    //./imagenes/logo-mobile.svg'
// }
// function colorDiurno() {
//     root = document.querySelector(':root');
//     root.style.setProperty(colorTitulo, '#572EE5');
//     root.style.setProperty(colorSecundario, '#50E3C2');
//     root.style.setProperty(colorBlanco, '#ffffff');
//     root.style.setProperty(colorTrending, '#F3F5F8');
//     //colorBtnIndex.innerHTML = 'Modo Nocturno';
    
//     logoIm4.src = "./imagenes/logo-mobile.svg";
//     //logoIm.innerHTML = `<a href="index.html"><img id='idImg' src="./imagenes/logo-mobile.svg" alt="Imagen logo"></a>`;
//     localStorage.setItem("theme", JSON.stringify('Modo Diurno'));
// }
// function colorDark() {
//     root = document.querySelector(':root');
//     root.style.setProperty(colorTitulo, 'white');
//     root.style.setProperty(colorSecundario, 'white');
//     root.style.setProperty(colorBlanco, '#37383C');
//     root.style.setProperty(colorTrending, '#222326');
//     //logoIm.innerHTML = `<a href="index.html"><img id='idImg' src="./imagenes/logo-desktop-modo-noc.svg" alt="Imagen logo"></a>`;
//     logoIm4.src = './imagenes/logo-desktop-modo-noc.svg';
    
//     //colorBtnIndex.innerHTML = 'Modo Diurno';
//     localStorage.setItem("theme", JSON.stringify('Modo Nocturno'));

// }
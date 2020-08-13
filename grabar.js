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
let form = new FormData;

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
            //invokeSaveAsDialog(blob);
            form.append('file', blob, 'myGif.gif');
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
//-------------------------------
//-------------------------------
//-------------------------------

// --- AÑADIR A MIS GIFOS

//-------------------------------


let misGifos = [];
// function testMyGifs() {
//     if(localStorage.getItem("misGifs") != null) {
//     listaGifs = JSON.parse(localStorage.getItem("misGifs"));
//     //cuantosGifs++;
//     for(let i = 0; i<listaGifs.length; i++)
//     misGifos.push(listaGifs[i]);
//     }
// }
//testMyGifs();


let cuantosGifs = 0;
function addToMyGifs(url) {
    if(localStorage.getItem("misGifs") != null) {
    listaGifs = JSON.parse(localStorage.getItem("misGifs"));
    //cuantosGifs++;
    for(let i = 0; i<listaGifs.length; i++)
    misGifos.push(listaGifs[i]);
    }
    misGifos.push(videoSave.src);

    localStorage.setItem("misGifs", JSON.stringify(misGifos));

    alert("posible exito");
}



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
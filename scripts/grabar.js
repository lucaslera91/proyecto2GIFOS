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
let form;
let misGifos = [];
let blob;
let timeStart;
let subiendo = document.getElementById('crear3');
let repetir;
let descargaGifo = document.getElementById('descargaGif');
//let recorder;
let video;
// let stream;

//let uploadFileBtn = 
//let gifFile;
//let formulario = document.getElementById('form');
let apiKey = 'JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U';
debugger;
grabar.addEventListener('click', getStreamAndRecord);
// if (start != 0) {
//     start.addEventListener('click', getStreamAndRecord);
// }

function getStreamAndRecord() {
    //debugger;

    grabar.style.zIndex = "-100";

    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: { max: 1200 }
        }
    }).then(function (stream) {
        //alert('he');

        video = document.querySelector('video');
        video.srcObject = stream;
        video.play();
        show = document.getElementById('show');
        show.style.zIndex = capaBtnStart;
        videoSave = document.getElementById('videoSave');
        displayPositions(1);

        recorder = RecordRTC(stream, {
            type: 'gif'
        });

    }).catch(function (err) {
        console.log(err.name, err.message)
        alert('Error, camara on?');
    });

}

//let stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
// let recorder = new RecordRTCPromisesHandler(stream, {
//     type: 'video'
// });
// function startRec(){
// recorder.startRecording();
// }
// async function stopRec(recorder){   
// await recorder.stopRecording();
// }
//let blob = await recorder.getBlob();
//invokeSaveAsDialog(blob);

// grabar.addEventListener('click', function () {
//     stream = navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: false
//     }).then(function (stream) {
//         alert('camara');

//         grabar.style.zIndex = -5;
//         recorder = new RecordRTCPromisesHandler(stream, {
//             type: 'gif'
//         })


//     }).catch(function (err) {
//         console.log(err.name, err.message)
//         alert('Error, camara on?');
//     });
// }


// ////////////////////////-////////////////////
// ////////////////////////

start.addEventListener('click', startRecord);

function startRecord() {
    start.style.display = 'none';
    displayPositions(2);
    recorder.startRecording();
    console.log(recorder.state);
    //alert('yea');
    capaBtnStop = capaBtnStop + 2;
    stopBtn.style.display ='flex';
    subirGifBtn.style.display = 'none';

    nuevaHora = new Date().getTime();/// tiempo de grabacion
    function looper() {
        // if(!recorder) {
        //     return;
        // }
        document.getElementById('accionGrabacion').innerHTML = 'Rec: ' + recTime((new Date().getTime() - nuevaHora) / 1000);
    }
    timeStart = setInterval(looper, 1000);
};


form = new FormData();
stopBtn.addEventListener('click', stopRecord);
async function stopRecord() {
    stopBtn.style.display ='none';

    recorder.stopRecording();
    blob = recorder.getBlob();
    clearInterval(timeStart);
    document.getElementById('accionGrabacion').innerHTML = 'Repetir Grabacion';
    repetir = document.getElementById('accionGrabacion');
    repetir.addEventListener('click', startRecord);

    subirGifBtn.style.display = 'flex';
    //debugger;
}

subirGifBtn.addEventListener('click', () => {uploadRecord(blob)});

function uploadRecord(blob) {

        displayPositions(3);
        
        subiendo.style.zIndex = 15;
        form.append('file', blob, 'myGif');
        form.append('api_key', apiKey);
        debugger;
        uploadFile(form);

    }



function uploadFile(form) {
    //debugger;
    fetch('https://upload.giphy.com/v1/gifs', {
        method: 'POST',
        body: form
    }).then(function (response) {
        result = response.json();
        return result;
        //debugger;
    }).then(function (result) {
        debugger;

        let favGifs = JSON.parse(localStorage.getItem("myGifs"));

        let arraymyGifs = [];

        if (favGifs != null) {
            for (let i = 0; i < favGifs.length; i++) {
                arraymyGifs.push(favGifs[i]);
                //debugger;
            }
            arraymyGifs.push(result.data.id);
        } else { arraymyGifs.push(result.data.id); }

        localStorage.setItem("myGifs", JSON.stringify(arraymyGifs));

        let loadsuccesfull = document.getElementById('crear4');

        loadsuccesfull.style.zIndex = 9999;
        //alert(result.data.id);
        botoneras = document.getElementsByClassName('controler');
        for (let index = 0; index < botoneras.length; index++) {
        
            botoneras[index].style.display = 'none';
        }
        descargaGifo.addEventListener('click', ()=>{invokeSaveAsDialog(blob, 'Mi Gifo')});
        botoneras.style.display = 'none';
        //alert(result.data.id);

    }).catch(console.error);
    //alert('error');
}




////////////////////////-////////////////////
////////////////////////////////////////////////-////////////////////
////////////////////////
function displayPositions(status) {
    let boton1 = document.getElementById('boton1');
    let boton2 = document.getElementById('boton2');
    let boton3 = document.getElementById('boton3');
    //let boton = document.getElementById('boton1');

    if (status == 1) {
        boton1.style.color = 'var(--colorBlanco)';
        boton2.style.color = 'var(--colorTitulo)';
        boton3.style.color = 'var(--colorTitulo)';

        boton1.style.backgroundColor = '#572EE5';
        boton2.style.backgroundColor = 'var(--colorBlanco)';
        boton3.style.backgroundColor = 'var(--colorBlanco)';

    } else

        if (status == 2) {
            boton1.style.color = 'var(--colorTitulo)';
            boton2.style.color = 'var(--colorBlanco)';
            boton3.style.color = 'var(--colorTitulo)';

            boton1.style.backgroundColor = 'var(--colorBlanco)';
            boton2.style.backgroundColor = '#572EE5';
            boton3.style.backgroundColor = 'var(--colorBlanco)';

        } else

            if (status == 3) {
                boton1.style.color = 'var(--colorTitulo)';
                boton2.style.color = 'var(--colorTitulo)';
                boton3.style.color = 'var(--colorBlanco)';

                boton1.style.backgroundColor = 'var(--colorBlanco)';
                boton2.style.backgroundColor = 'var(--colorBlanco)';
                boton3.style.backgroundColor = '#572EE5';

            }

}


function recTime(secs) {

    let hr = Math.floor(secs / 3600);
    let min = Math.floor((secs - (hr * 3600)) / 60);
    let sec = Math.floor(secs - (hr * 3600) - (min * 60));

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    if (hr <= 0) {
        return min + ':' + sec;
    }

    return hr + ':' + min + ':' + sec;

}

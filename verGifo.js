let verGifoNet = 0;
let contenerGif = document.getElementById('contenerGifoMax');
//alert('start');
let idMax = "";
//alert(JSON.parse(localStorage.getItem("max")));
verGif(JSON.parse(localStorage.getItem("max")));

function verGif(id) {


    //alert(id);
    debugger;
    // alert(id);
    fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U`)
        .then(function (dato1) {
            result = dato1.json();
            return result;
        })
        .then(function (result) {
            //base = document.createElement('div');
            //base.className = "base";
            //base.id = `fav${countsearch}download${countsearch}maximg${countsearch}`;
            //`<img src="${element.images.fixed_height.url}" type="">`;
            contenerGif.innerHTML =
                `
                            <img class="embed" src="${result.data.images.original.url}" alt="">
                        `;
            //debugger;
            //disp.appendChild(base);


            localStorage.setItem("max", JSON.stringify(""));
        })
        .catch(function (err) {
            console.log(err.name, err.message)
            debugger;
        })
}




let colorBlanco = '--colorBlanco';
let colorSecundario = '--colorSecundario';
let colorTitulo = '--colorTitulo';
let colorTrending = '--colorTrending';
let root;
//let logoIm4 = document.getElementById('idImg4');
//logoIm.src = './imagenes/logo-desktop-modo-noc.svg';

// let colorBtnIndex4 = document.getElementById('darkIndex4');
// colorBtnIndex4.addEventListener('click', setTheme);
let themeColor;


if(JSON.parse(localStorage.getItem("theme")) == null){
    localStorage.setItem("theme", JSON.stringify('Modo Diurno'));
}else {
    themeColor= JSON.parse(localStorage.getItem("theme"));
}
theme();

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
       // logoIm4.src = './imagenes/logo-desktop-modo-noc.svg';

       
        //alert('rompe');
    }else if (themeColor == 'Modo Diurno') {
            root = document.querySelector(':root');
    root.style.setProperty(colorTitulo, '#572EE5');
    root.style.setProperty(colorSecundario, '#50E3C2');
    root.style.setProperty(colorBlanco, '#ffffff');
    root.style.setProperty(colorTrending, '#F3F5F8');
   //colorBtnIndex.innerHTML = themeColor;
    //logoIm4.src = "./imagenes/logo-mobile.svg";
    
        //alert('hola');
    }
   //./imagenes/logo-mobile.svg'
}


// function colorDiurno() {
//     root = document.querySelector(':root');
//     root.style.setProperty(colorTitulo, '#572EE5');
//     root.style.setProperty(colorSecundario, '#50E3C2');
//     root.style.setProperty(colorBlanco, '#ffffff');
//     root.style.setProperty(colorTrending, '#F3F5F8');
//     //colorBtnIndex.innerHTML = 'Modo Nocturno';
    
//     //logoIm4.src = "./imagenes/logo-mobile.svg";
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
//     //logoIm4.src = './imagenes/logo-desktop-modo-noc.svg';
    
//     //colorBtnIndex.innerHTML = 'Modo Diurno';
//     localStorage.setItem("theme", JSON.stringify('Modo Nocturno'));

// }





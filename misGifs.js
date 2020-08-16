let listaGifs;
let contenedorMisGifs;
let base;
let request;
if(localStorage.getItem("misGifs") != null) {
listaGifs = JSON.parse(localStorage.getItem("misGifs"));
//alert("fuck");

}
contenedorMisGifs = document.getElementById('cont');
window.onload = cargarMisGifs;
function cargarMisGifs(){
    debugger;
    for(let i = 0; i< listaGifs.length; i++){
        // request = new XMLHttpRequest();
     base = document.createElement('div');
        // request.open("POST", "http://foo.com/submitform.php");
      
       //alert("still weird");

    base.innerHTML = 
    `<div class="base">
    <img class="embed" id="miGif${i}" src="${listaGifs[i]}" alt="">
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
</div>`;
    
    contenedorMisGifs.appendChild(base);
        
}
}
//window.onload = testingtrend;
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






let colorBlanco = '--colorBlanco';
let colorSecundario = '--colorSecundario';
let colorTitulo = '--colorTitulo';
let colorTrending = '--colorTrending';
let root;
let logoIm3 = document.getElementById('idImg3');
//logoIm.src = './imagenes/logo-desktop-modo-noc.svg';

let colorBtnIndex3 = document.getElementById('darkIndex3');
colorBtnIndex3.addEventListener('click', setTheme);
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
        logoIm3.src = './imagenes/logo-desktop-modo-noc.svg';

       
        //alert('rompe');
    }else if (themeColor == 'Modo Diurno') {
            root = document.querySelector(':root');
    root.style.setProperty(colorTitulo, '#572EE5');
    root.style.setProperty(colorSecundario, '#50E3C2');
    root.style.setProperty(colorBlanco, '#ffffff');
    root.style.setProperty(colorTrending, '#F3F5F8');
   //colorBtnIndex.innerHTML = themeColor;
    logoIm3.src = "./imagenes/logo-mobile.svg";
    
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
    
    logoIm3.src = "./imagenes/logo-mobile.svg";
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
    logoIm3.src = './imagenes/logo-desktop-modo-noc.svg';
    
    //colorBtnIndex.innerHTML = 'Modo Diurno';
    localStorage.setItem("theme", JSON.stringify('Modo Nocturno'));

}

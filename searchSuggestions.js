test = document.getElementById("search1");
test.innerHTML = "testç";

test.addEventListener("keyup", testingHelp);
let contenedorSugerengcia = document.getElementById('suggestionBox');
let suggestion;
let idSuggestoins;

let buscarSugerencia;


function setSearchSuggestion() {

    //alert("wero");
    let idCheck = this.id;
    alert(idCheck);
    debugger;
    test.value = idCheck;
    contenedorSugerengcia.innerHTML = "";

    searchtitle();
    guardarValue();
    resetGifs();
    resetSearch();
    //let idEndSuggestion = parseInt(idCheck.slice(idCheck.length - 1));

    //let newSearch = buscarSugerencia[idEndSuggestion].innerHTML;

    //alert(newSearch);


    testing(idCheck);

}




function testingHelp() {
    //alert("yes");
    //debugger;
    if (parseInt(test.value.length) == 0) {
        //alert('working');
        contenedorSugerengcia.innerHTML = "";
    } else {
        console.log(busqueda);
        fetch(`https://api.giphy.com/v1/tags/related/term=${test.value}?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U&limit=4`)
            //fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=JYqVNpPaFFV2Cix7iSHnDB6gs42qBZ6U&q=${busqueda}&limit=4`)
            .then(function (dato1) {
                result = dato1.json();
                contenedorSugerengcia.innerHTML = ""
                return result;
            })
            .then(function (result) {
                console.log(busqueda);
                idSuggestoins = 0;
                result.data.forEach(element => {
                    //suggestion = document.createElement('li');

                    contenedorSugerengcia.innerHTML += `<li class="suggestion" id="${element.name}"><img id="searchBnt" src="./imagenes/icon-search.svg" alt="lupa">${element.name}</li>`;
                    console.log(element.name);

                    //contenedorSugerengcia.appendChild(suggestion);
                    // //debugger;
                    // buscarSugerencia = document.getElementsByClassName('suggestion');
                    // // for(let i = 0; i<buscarSugerencia.length; i++){ 
                    // buscarSugerencia[idSuggestoins].addEventListener('click', function() {setSearchSuggestion(element.name)});
                    idSuggestoins++;
                });
                buscarSugerencia = document.getElementsByClassName('suggestion');
                for (let i = 0; i < buscarSugerencia.length; i++) {
                    buscarSugerencia[i].addEventListener('click', setSearchSuggestion);
                }
            })
            .catch(function (err) {
                console.log("error");
            });
    }
}
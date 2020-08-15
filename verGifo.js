let verGifoNet = 0;
let contenerGif = document.getElementById('contenerGifoMax');
//alert('start');
let idMax = "";
//alert(JSON.parse(localStorage.getItem("max")));
verGif(JSON.parse(localStorage.getItem("max")));

function verGif(id){
    
   
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
    

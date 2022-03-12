let item = document.querySelectorAll(".nav--element li");
let Span = document.querySelectorAll(".nav--element span");


item[1].addEventListener('onmouseover', Hover);

function Hover(){

    Span.style.display= 'inline' ;
    console.log("saluttt")
}

function Clic(){

    item.textContent = "salut"
}
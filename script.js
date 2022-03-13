let item = document.querySelectorAll(".nav--element li");
let Span = document.querySelectorAll(".nav--element span");
let Hire = document.querySelector(".afterHire");
let Few  = document.querySelector(".fewInfo div span a");
let Hires = document.querySelector(".afterHire span");


for (let i = 0; i < item.length; i++) {
    const element = item[i];
    const dot     = Span[i]
    element.addEventListener('mouseover', function(){
        /*        console.log(i);
        console.log(element);
        console.log(dot); */
        dot.style.display = "inline";
        }, false);

    element.addEventListener('mouseleave', function(){
        dot.style.display = "none";
    })
}

Few.addEventListener('mouseover', function(event){

    Hire.style.marginLeft = "2.5rem";

    setTimeout(function() {/*
        Hires.style.width = "20px";
        Hires.style.backgroundColor = "red";
        Hires.textContent = "."
        Hires.style.color = "red"
        Hires.style.marginLeft = "15px"
        Hires.style.marginRight = "15px";
        Hires.style.borderRadius = "2rem";*/

        Hires.backgroundImage
      }, 500);
})

function Clic(){

    item.textContent = "salut"
}
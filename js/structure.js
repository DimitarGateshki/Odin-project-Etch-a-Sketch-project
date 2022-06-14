function buildGrid(size) {

    let container= document.querySelector(".container");

    while(container.firstChild){
        container.removeChild(container.lastChild);
    }

   // container.style.width=`${size*20}px`;
    
    for (let row = 0; row < size; row++) {
        let rowElement=document.createElement("div");
        rowElement.className="rowElement";
        rowElement.style.height=`${960/size}px`
        

        for (let coll = 0; coll < size; coll++) {
            let collElement=document.createElement("div");
            collElement.className="collElement";
            collElement.style.height=`${960/size}px`
            collElement.style.width=`${960/size}px`
            rowElement.appendChild(collElement);
            
        }
       container.appendChild(rowElement);
    }
    
}

buildGrid(5);
function resetTheGrid() {
    buildGrid(prompt("Set size between 1 and 100"))
  
}

function clearTheGrid(){
   var divs= document.querySelectorAll(".collElement");
   for (let i = 0; i < divs.length; i++) {
       divs[i].style.backgroundColor="white";
       
   }
}

let button1=document.querySelector("#col");
let button2=document.querySelector("#reset");
let button3=document.querySelector("#resize");

button2.addEventListener("click",clearTheGrid);
button3.addEventListener("click",resetTheGrid);


let container=document.querySelector(".container");

let color="#000000";

function generateColor() {
    color= "#"+(Math.random()*0xffffff<<0).toString(16);
    document.querySelector(".color").style.backgroundColor=color;
    if (color.length<7) {
        generateColor();
    }
}

button1.addEventListener("click",generateColor);

container.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = color;
  });




  


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


let button=document.querySelector(".reset");

button.addEventListener("click",resetTheGrid);

let container=document.querySelector(".container");

container.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = "orange";
  });




  


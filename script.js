// create divs until length is 32. 16 x 16 grid. style divs with css.
//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

let gridDim = 16;

function createDiv () {
    let divSuffix = 1;
    //div held in gridDiv
let gridDiv = document.createElement("div");
gridDiv.setAttribute("class", "grid-item");
// text content for div.
//let divContent = document.createTextNode("div test");
    //add gridDiv to divContent
   // gridDiv.appendChild(divContent);
    let element = document.getElementById("mainDiv");
    element.appendChild(gridDiv);
};

function buildGrid() {
    for (let i = 0; i < gridDim + gridDim; i++) {
    createDiv();
    console.log(i);
    
    }
    
};
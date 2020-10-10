// create divs until length is 32. 16 x 16 grid. style divs with css.
//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

let gridDim = 16;
let num = 0;
let mouseTarget = document.querySelectorAll(':hover');

/*
function hoverFunction() {
    //document.getElementsByClassName("grid-item").id=("colorSquare");
    document.getElementsByClassName("grid-item").onmousover = this.className='permanent-color';
    console.log("mousingoverlog");

  }; */
  
function buildGrid() {
    for (let i = 0; i < gridDim * 16; i++) {
    createDiv();
    //console.log(i);
    
    }; 

function createDiv () {
    let divSuffix = "-" + num++;
    //div held in gridDiv
    let gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", 'grid-item');
    gridDiv.setAttribute("id", "square" + divSuffix);
    gridDiv.addEventListener("mouseover", permanentColor, true);
    //gridDiv.setAttribute("onmouseover", "permanentColor()");
    gridDiv.style.backgroundColor="white";
    let divClass = document.getElementsByClassName("grid-container")[0];
    divClass.appendChild(gridDiv);
    
        };

        //close. not changing colour still.
function permanentColor() {
    let gridItem = document.getElementsByClassName("grid-item");
    gridItem.className="permanent-color";
    console.log("mousingoverlog");
};



 };
    

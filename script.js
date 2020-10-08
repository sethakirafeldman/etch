// create divs until length is 32. 16 x 16 grid. style divs with css.
//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

let gridDim = 16;
let num = 0;
let mouseTarget = document.querySelectorAll(':hover');

//close. not changing colour still.
function hoverFunction() {
//    mouseTarget.style.color = "red";    
    console.log("mousingoverlog");

  };
  
function buildGrid() {
    for (let i = 0; i < gridDim * 16; i++) {
    createDiv();
    //console.log(i);
    
    }; 

function createDiv () {
    let divSuffix = "-" + num++;
    //div held in gridDiv
    let gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", 'grid-item');
    //gridDiv.setAttribute("onmouseenter", "hoverFunction()")
    gridDiv.style.backgroundColor="white";
    let element = document.getElementsByClassName("grid-container")[0];
    element.appendChild(gridDiv);
    
        };
  



    // on mouseover function
  

      
    //square changes color when any part of grid is touched, and only one square is affected. look into targetting each id/class when hovering specifically.    


 };
    

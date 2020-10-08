// create divs until length is 32. 16 x 16 grid. style divs with css.
//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

let gridDim = 16;
let num = 0;

//close. not changing colour still.
function hoverFunction() {
    //document.getElementById("grid-item").style.backgroundcolor = "red";
    document.getElementById("grid-item").backgroundColor = "green";
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
    gridDiv.setAttribute("onmouseover", "hoverFunction()")
    gridDiv.style.backgroundColor="white";
    let element = document.getElementsByClassName("grid-container")[0];
    element.appendChild(gridDiv);
    
        };
  

/*    
let test = document.getElementsByClassName('grid-container');
    test.addEventListener('mouseenter', hoverMouse(event) ) { 
        event.target.style.backgroundColor="green"; }
       // document.getElementById('grid-item').style.backgroundColor = "green";
        console.log("hoveringTest");
    }; */

    // on mouseover function
  

      
    //square changes color when any part of grid is touched, and only one square is affected. look into targetting each id/class when hovering specifically.    


 };
    

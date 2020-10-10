// create divs until length is 32. 16 x 16 grid. style divs with css.
//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

let gridDim = 16;
let num = 0;

// !idea to check if square has css property, then change class to make permanent.
function permanentColor() {
    const cssElement = document.querySelector('.grid-item:hover');
    const cssStyle = getComputedStyle(cssElement, "::hover");
    const cssBackgroundColor = style.backgroundColor;
    console.log(cssBackgroundColor);
//        if ( cssStyle = )

};
//this changes the class of the created div elements, but it gets stuck at the first one.
/* 
function permanentColor() 
    let target = document.querySelector(".grid-item");
    //target.className="";
    target.className= "permanent-color";
    console.log("permcolortest");
   
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
    gridDiv.setAttribute("id", "square"+divSuffix);
    //gridDiv.addEventListener("mouseover", permanentColor, true);
    gridDiv.setAttribute("onmouseover", "permanentColor()");
    gridDiv.style.backgroundColor="white";
    let divClass = document.getElementsByClassName("grid-container")[0];
    divClass.appendChild(gridDiv);
};

    };



     
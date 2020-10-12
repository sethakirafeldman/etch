// create divs until length is 32. 16 x 16 grid. style divs with css.
//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

let gridDimension = 16;
let num = 0;

//working
function getElemId(obj) {
    let selectedSquare = obj;
    console.log(selectedSquare);
    selectedSquare.setAttribute("class", "permanent-color");

    };
/* did not work. prob can delete. 
function permanentColor() {
    const green = "rgb(0, 128, 0)";
    const cssElement = document.querySelector('.grid-item:hover');
    let cssStyle = getComputedStyle(cssElement, "::hover").getPropertyValue("background-color");
    //const cssBackgroundColor = style.backgroundColor;
        // if background-color is green, change class.
        if ( cssStyle = green ) {
            console.log("square is greenTest");
            document.getElementById("")
        };
}; */
//works 
function buildGrid() {
    for (let i = 0; i < gridDimension * 16; i++) {
    createDiv();
    //console.log(i);
    
    };
// works
function createDiv () {
    let divSuffix = "-" + num++;
    //div held in gridDiv
    let gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", 'grid-item');
    gridDiv.setAttribute("id", "square"+divSuffix);
    gridDiv.style.backgroundColor="white";
    //gridDiv.setAttribute("onmouseover", "permanentColor()");
    gridDiv.setAttribute("onmouseenter", "getElemId(this)");
    let divClass = document.getElementsByClassName("grid-container")[0];
    divClass.appendChild(gridDiv);
};

    };



     
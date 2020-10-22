// create divs until length is 32. 16 x 16 grid. style divs with css.
//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

let value = "16";
let gridDimensions = value * value;
let num = 0;

//default dimension value.

// working, now set input to a maximum of 100

//changes class of selected div to change color.
function getElemId(obj) {
    let selectedSquare = obj;
    selectedSquare.setAttribute("class", "permanent-color");
    };

//works to create divs. not grid
function buildGrid(value) {
    for (let i = 0; i < gridDimensions; i++) {
    createDiv(gridDimensions);
    
    };

//creates div in DOM.
    function createDiv () {
        let divSuffix = "-" + num++;
        //div held in gridDiv
        let gridDiv = document.createElement("div");
        gridDiv.setAttribute("class", 'grid-item');
        gridDiv.setAttribute("id", "square"+ divSuffix);
        //changeGridSize();
        gridDiv.style.backgroundColor="white";
        gridDiv.setAttribute("onmouseenter", "getElemId(this)");
        let divClass = document.getElementsByClassName("grid-container")[0];
        divClass.appendChild(gridDiv);
            };

    };    
       // values pass into css @ :root      
function getDimensions(value) {
    value = window.prompt("Enter a number", "");
        if (value <= 100) { 
        // change default to prompt value
        //value = window.prompt("test", "");
        changeGridSize(value);
        }
        else {
            console.log("select a value under 100.")
        }
};    

function changeGridSize(value) {

    cssDimensions = 'repeat(' + value + ', 100px)'; 
// cssDimensions = 'repeat(32, 100px)';
    let container = document.getElementById("containerID");
    container.style.setProperty('grid-template-columns', cssDimensions);
    container.style.setProperty('grid-template-rows', cssDimensions);
    buildGrid(value + container);
};

     
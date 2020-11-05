// create divs until length is 32. 16 x 16 grid. style divs with css.
//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

let num = 0;

//default dimension value.

// feeling stuck. going back to tutorials. need to figure out centering grids and grid size constant.

//changes class of selected div to change color.
function getElemId(obj) {
    let selectedSquare = obj;
    selectedSquare.setAttribute("class", "permanent-color");
    };

//works to create divs. called Onload from html.
function buildDivs(value) {
    gridDimensions = value * value;
    for (let i = 0; i < gridDimensions; i++) {
    createDiv(gridDimensions);

    //creates div in DOM.
        function createDiv() {
            let divSuffix = "-" + num++;
            //div held in gridDiv
            let gridDiv = document.createElement("div");
            gridDiv.setAttribute("class", 'grid-item');
            gridDiv.setAttribute("id", "square"+ divSuffix);
            console.log("There are "+ gridDimensions + " divs");
            gridDiv.style.backgroundColor="white";
            gridDiv.setAttribute("onmouseenter", "getElemId(this)");
            let divClass = document.getElementsByClassName("grid-container")[0];
            divClass.appendChild(gridDiv);
            
                };
            };

    };    
       // values pass into css @ :root      
function getDimensions(value) {
    value = window.prompt("Enter a number", "");
        if (value <= 100) { 
        // change default to prompt value
        changeGridSize(value);
        console.log("grid is set to " + value);
        }
        else {
            console.log("select a value under 100.")
        }
};    
function changeGridSize(value) {
    gridDimensions = value * value;
    cssDimensions = "repeat(" + value + ", 1em) " + "/ repeat(" + value + ", 1em)";
    //cssDimensions = 'repeat(' + value + ', 1em)';
    let container = document.getElementById("containerID");
    console.log("There are "+ gridDimensions + " divs");
    container.style.setProperty('grid-template', cssDimensions);
    //container.style.setProperty('grid-template-columns', cssDimensions);
    //container.style.setProperty('grid-template-rows', cssDimensions);
    buildDivs(value + container);
};

     
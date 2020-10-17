// create divs until length is 32. 16 x 16 grid. style divs with css.
//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

let value = "16";
let gridDimensions = value * value;
let num = 0


// does not do anything yet. 
function dimPrompt() {
    let value = prompt("enter a number");
    
    let txt;
        if (value == null || value == "") {
            txt= "no entry";

        } else {
            txt = "You have chosen " + value + " x " + value ;
            console.log(value);
            changeGridSize();
        }
        document.getElementById("settings").innerHTML = txt;
    };
// have to figure out how to pass variables into the css. 
 function changeGridSize () {
    value = "";
    let container = document.getElementById("containerID");
    container.style.gridTemplateColumns = "repeat(16, 100px)";
    container.style.gridTemplateRows = "repeat(16, 100px)";  
 };   

//changes class of selected div to change color.
function getElemId(obj) {
    let selectedSquare = obj;
    selectedSquare.setAttribute("class", "permanent-color");

    };

//works to create divs. not grid
function buildGrid() {
    for (let i = 0; i < gridDimensions; i++) {
    createDiv();
    //console.log(i);

    };

    // creates div in DOM.
    function createDiv () {
        let divSuffix = "-" + num++;
        //div held in gridDiv
        let gridDiv = document.createElement("div");
        gridDiv.setAttribute("class", 'grid-item');
        gridDiv.setAttribute("id", "square"+ divSuffix);
        changeGridSize();
        gridDiv.style.backgroundColor="white";
        gridDiv.setAttribute("onmouseenter", "getElemId(this)");
        let divClass = document.getElementsByClassName("grid-container")[0];
        divClass.appendChild(gridDiv);
            };

    };



     
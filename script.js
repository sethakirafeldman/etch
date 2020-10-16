// create divs until length is 32. 16 x 16 grid. style divs with css.
//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

let value = "16";
let gridDimensions = value * value;
let num = 0

// does not do anything yet. 
function dimPrompt() {
    let value = prompt("test", "enter dimensions");
    let txt;
        if (value == null || value == "") {
            txt= "no entry";
        } else {
            txt = "You have chosen";
            console.log(value);
        }
        document.getElementById("settings").innerHTML = txt;
    };

// have this function activate a gridbuilding function.
    function changeCSS () {
        document.getElementById("gridID").setAttribute("id", "test")
        //document.getElementById("gridID").style.gridTemplateColumns = 
        //document.getElementById("gridID").style.gridTemplateRows =    
    }; 

//working
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
// works
function createDiv () {
    let divSuffix = "-" + num++;
    //div held in gridDiv
    let gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", 'grid-item');
    gridDiv.setAttribute("id", "square"+ divSuffix);
    gridDiv.style.backgroundColor="white";
    //gridDiv.setAttribute("onmouseover", "permanentColor()");
    gridDiv.setAttribute("onmouseenter", "getElemId(this)");
    let divClass = document.getElementsByClassName("grid-container")[0];
    divClass.appendChild(gridDiv);
        };

    };



     
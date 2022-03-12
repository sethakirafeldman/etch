//changes class of selected div to change color.
var selector = document.getElementById("selector");

var slider = document.getElementById("slider");

value = "16";

function getElemId(obj) {
    let selectedSquare = obj;
    selectedSquare.setAttribute("class", "permanent-color");
    };

function clearDiv() {
    let gridNode = document.getElementById("containerID");
    gridNode.querySelectorAll('*').forEach(n => n.remove());
};   

//creates Divs. Called in html.
function buildDivs(value) {

    function createDiv(value) {
        var  num = 0;
        let divSuffix = "-" + num++;
        gridDimensions = value * value;
        //div held in gridDiv
        let gridDiv = document.createElement("div");
        gridDiv.setAttribute("class", 'grid-item');
        gridDiv.setAttribute("id", "square" + divSuffix);
        // console.log("There are "+ gridDimensions + " divs");
        gridDiv.style.backgroundColor="white";
        gridDiv.setAttribute("onmouseenter", "getElemId(this)");
        let divClass = document.getElementsByClassName("grid-container")[0];
        divClass.appendChild(gridDiv);
        
    };

    //clears extra divs. 
    if ( value <= 100 ) { 
    clearDiv();
    gridDimensions = value * value;
        for ( let i = 0; i < gridDimensions; i++ ) {
        createDiv(value); 
        }
    }

    else if ( value > 100) {
    }
    else {
            
    console.log("nothing selected, returned to default");
    }
}; 
        

// values pass into css at root      
function getDimensions(value) {
        
        value = window.prompt("Enter a number", "");
        if (value <= 100) { 
        // change default to prompt value
        changeGridSize(value);
        }

        else if ( value = "" || value === null || value === "null" ) {
            console.log("NO VALUE SELECTED");    
        }

        else {
            alert("Please select a value under 100");
        }
};  

function changeGridSize(value) {
    slider.value = value;
    gridDimensions = value * value;
    cssHeight = "repeat(" + value + ', 1fr)'; 
    cssWidth = "repeat(" + value + ', 1fr)'; 
    cssDimensions = cssHeight +" / " + cssWidth;
    let container = document.getElementById("containerID");
    container.style.setProperty('grid-template', cssDimensions);
    buildDivs(value);
};

slider.addEventListener("change", () => {
    changeGridSize(slider.value);
});
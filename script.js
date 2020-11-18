//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

//changes class of selected div to change color.
value = "16";

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() {
    output.innerHTML = this.value;
}

function getElemId(obj) {
    let selectedSquare = obj;
    selectedSquare.setAttribute("class", "permanent-color");
    };

function clearDiv() {
    let gridNode = document.getElementById("containerID");
    gridNode.querySelectorAll('*').forEach(n => n.remove());
};   

//works to create divs. called Onload from html. 
function buildDivs(value) {
    function createDiv(value) {
        var  num = 0;
        let divSuffix = "-" + num++;
        gridDimensions = value * value;
        //div held in gridDiv
        let gridDiv = document.createElement("div");
        gridDiv.setAttribute("class", 'grid-item');
        gridDiv.setAttribute("id", "square" + divSuffix);
        console.log("There are "+ gridDimensions + " divs");
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
        //console.log("value is more than 100");   
    }
      else {
        
        console.log("nothing selected, returned to default");
                    }
            }; 
        

       // values pass into css @ :root      
function getDimensions(value) {
        
        value = window.prompt("Enter a number", "");
        if (value <= 100) { 
        // change default to prompt value
        changeGridSize(value);
        //console.log("(getDimensions()) grid is set to " + value);
        }

        else if ( value = "" || value === null || value === "null" ) {
            console.log(value);
            console.log("NO VALUE SELECTED");    
        }

        else {
            //console.log("Please select a value under 100");
            alert("Please select a value under 100");

        }
};  
// value not passing into create divs properly. creates minimum of 16 x 16 currently  
function changeGridSize(value) {
    gridDimensions = value * value;
    cssHeight = "repeat(" + value + ', 1fr)'; 
    cssWidth = "repeat(" + value + ', 1fr)'; 
    cssDimensions = cssHeight +" / " + cssWidth;
    let container = document.getElementById("containerID");
    container.style.setProperty('grid-template', cssDimensions);
    buildDivs(value);

};

     
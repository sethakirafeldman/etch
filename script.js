//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

let num = 0;

//default dimension value.

// feeling stuck. going back to tutorials. need to figure out centering grids and grid size constant.

//changes class of selected div to change color.
function getElemId(obj) {
    let selectedSquare = obj;
    selectedSquare.setAttribute("class", "permanent-color");
    };

function clearDiv() {
    let removeDiv = document.querySelectorAll(".grid-item")
    //let removeDiv = document.getElementsByClassName("grid-item");
    console.log(removeDiv);
    // remove method not working. try iterating through to remove divs by id/square #. 
    for ( ) {


    }
};    

 
//works to create divs. called Onload from html. 
function buildDivs(value) {

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

//clears extra divs.
    if ( value < 16 ) {
        console.log("value is less than 16");
        gridDimensions = value * value;
        for ( let i = gridDimensions; i > 0; i-- ) {
         clearDiv(gridDimensions);   
        }

    }

     else {

        gridDimensions = value * value;
        for (let i = 0; i < gridDimensions; i++) {
        createDiv(gridDimensions); 

        /*creates div in DOM.
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
            } */
                   };
           }; 

    };    


       // values pass into css @ :root      
function getDimensions(value) {
    value = window.prompt("Enter a number", "");
        if (value <= 100) { 
        // change default to prompt value
        changeGridSize(value);
        //console.log("(getDimensions()) grid is set to " + value);
        }
        else {
            console.log("select a value under 100.")
        }
};  
// value not passing into create divs properly. creates minimum of 16 x 16 currently  
function changeGridSize(value) {
    gridDimensions = value * value;
    let minMax = ', minmax(6.25px, 75px))';
    cssDimensions = "repeat(" + value + minMax + " / repeat(" + value + minMax;
    let container = document.getElementById("containerID");
    console.log("(changeGridSize())There are "+ gridDimensions + " divs");
    container.style.setProperty('grid-template', cssDimensions);
    buildDivs(value);


};

     
// create divs until length is 32. 16 x 16 grid. style divs with css.
//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project


//create new div
function createDiv () {
    //div held in gridDiv
   let gridDiv = document.createElement("div");
   // text content for div.
   let divContent = document.createTextNode("div test");
    //add gridDiv to divContent
    gridDiv.appendChild(divContent);
     let element = document.getElementById("mainDiv");
    element.appendChild(gridDiv);
};
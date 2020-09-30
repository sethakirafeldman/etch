// create divs until length is 32. 16 x 16 grid. style divs with css.
//https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

let numberOfDivs = 0;

function createDiv () {
    let num = 0;
    let incrementDiv = "div"+ num++;
    //div held in gridDiv
let gridDiv = document.createElement("div");
gridDiv.setAttribute("id", incrementDiv);
// text content for div.
let divContent = document.createTextNode("div test");
    //add gridDiv to divContent
    gridDiv.appendChild(divContent);
    let element = document.getElementById("mainDiv");
    element.appendChild(gridDiv);
};


//create new div
function createGrid (){
    if (numberOfDivs < 32) {
        createDiv();
    }
}
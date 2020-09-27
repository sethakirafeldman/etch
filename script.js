// create divs until length is 32. 16 x 16 grid. style divs with css.

let gridNumber = [0];

function addDiv() {
    let i;
    for (i = 0; i > gridNumber.length; i++) {
        document.createElement("div");
    }



}
document.body.onload = addDiv ()
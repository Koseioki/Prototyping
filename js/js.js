/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

// when mousedown() is clicked, lightupRoom is lit
function mousedown(){
    document.getElementById("lightupStudyroom").style.display = "block";
}
function mouseup(){
    document.getElementById("lightupStudyroom").style.display = "none";
}

function mousedown(){
    document.getElementById("lightupBar").style.display = "block";
}
function mouseup(){
    document.getElementById("lightupBar").style.display = "none";
}
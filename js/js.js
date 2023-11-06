/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

// when mousedown() is clicked, lightupRoom is lit
function mousedown(){
    document.getElementById("lightupStudyroom").style.opacity = "1";
}
function mouseup(){
    document.getElementById("lightupStudyroom").style.opacity = "0";
}

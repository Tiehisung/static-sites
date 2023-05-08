let start = false;

function Start() {
  start = true;
}
function Stop() {
  start = false;
}

//large digit
let large=0;
let medium=0;
let small=0;

let largeEl = document.getElementById("large")
let mediumEl = document.getElementById("medium")
let smallEl = document.getElementById("small")


let date = new Date();
function startCounter() {
    start=true
    console.log("Start",date)
    if (start) {
    smallEl.innerText= date.getSeconds();
    mediumEl.innerText = date.getMinutes();
    largeEl.innerText = date.getHours();
  }
}

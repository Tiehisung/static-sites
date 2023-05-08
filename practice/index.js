let names = [];

let inputEl = document.getElementById("input");
let outputEl = document.getElementById("output");

function AddNewName() {
  let li = document.createElement("li");
  li.innerText = inputEl.value;
  document.getElementById("namesCont").appendChild(li);
}


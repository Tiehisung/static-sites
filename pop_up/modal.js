function openModal() {
  setTimeout(function () {
    document.getElementById("modal_cont").style.display = "block";
    document.getElementById("overlay").style.backgroundColor =
      "rgba(0, 0, 0, 0.431)";
  }, 2000);
}
function closeModal() {
  document.getElementById("overlay").style.backgroundColor = "transparent";
  document.getElementById("modal_cont").style.display = "none";
}

function submitFx(e) {
  e.preventDefault();
}


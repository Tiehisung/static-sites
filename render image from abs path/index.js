document.getElementById("image-input").addEventListener("change", () => {
  let reader = new FileReader();
  reader.onload = (loadEvt) => {
    document.getElementById("image-tag").src = loadEvt.target.result;
    };
    console.log(reader)
  reader.readAsDataURL(this.files[0]);
});

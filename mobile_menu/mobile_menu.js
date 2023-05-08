const imageEl = document.getElementById("menuImg");
const listCont = document.getElementById("listCont");
let toggleCounter = 0;
imageEl.addEventListener("click", () => {
  toggleCounter = toggleCounter + 1;
  if (toggleCounter % 2 === 1) {
    imageEl.src = "/mobile_menu/images/small_cancel.png";
    listCont.style.display = "block";
    imageEl.title = "Hide nav";
    listCont.style.transitionDuration = "300ms";
  } else {
    imageEl.src = "/mobile_menu/images/menuBlack.png";
    //toggle nav
    listCont.style.display = "none";
    imageEl.title = "Expand";
    listCont.style.transitionDuration = "1s";
    listCont.style.transitionDelay = "1s";
  }
});

let anyLi = document.getElementById(li);
function showLiCont_ME(contId) {
  document.getElementById(contId).style.display = "block";
}
function hideLiCont_ML(contId) {
  document.getElementById(contId).style.display = "none";
}

// //   inner cont styler
// mouseEnterFx("bCont");
// mouseEnterFx("mumCont");
// mouseEnterFx("suburCont");
// mouseEnterFx("nakiatCont");
// mouseEnterFx("areezCont");
// mouseEnterFx("ameeratCont");
// mouseEnterFx("myCont");

// mouseLeaveFx("bCont");
// mouseLeaveFx("mumCont");
// mouseLeaveFx("suburCont");
// mouseLeaveFx("nakiatCont");
// mouseLeaveFx("ameeratCont");
// mouseLeaveFx("areezCont");
// mouseLeaveFx("myCont");

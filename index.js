// jshint esversion:6

let css =  document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let bodyStyle = document.querySelector("body").style;

function showBgValue() {
  css.textContent = bodyStyle.background;
}

function bgColor(event) {
  bodyStyle.background = `linear-gradient(to right, ${color1.value} , ${color2.value} )`;
  showBgValue();
}

 color1.addEventListener("input", bgColor);

 color2.addEventListener("input", bgColor);

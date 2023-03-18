let bulbContainer = document.querySelector("#bulbContainer");
let body = document.querySelector("body");
let bulb = document.getElementById("bulb");

var clicked = "light";
bulbContainer.addEventListener("click", function () {
  if (clicked === "light") {
    bulb.style.marginLeft = "20px";
    body.style.backgroundColor = "black";
    clicked = "dark";
  } else {
    bulb.style.marginLeft = "0px";
    body.style.backgroundColor = "black";
    clicked = "light";
  }
});

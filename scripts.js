var body = document.getElementById("background");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h2");
var h3 = document.querySelector("h3");



h3.textContent = "linear-gradient";

function backgroundPage() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";
  css.textContent = body.style.background;

}


color1.addEventListener("input", backgroundPage);
color2.addEventListener("input", backgroundPage);

//using call back function for both color1 and color2.....
// color1.addEventListener("input", function () {
//   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";
  //css.textContent = body.style.background;
// });
//
//
// color2.addEventListener("input", function () {
//   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";
//
//
// });

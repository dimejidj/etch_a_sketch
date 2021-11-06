const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const rainbowBtn = document.querySelector(".rainbow");
const plainBtn = document.querySelector(".plain");
let rainbowOn = false;

const tryOut = document.querySelector(".try");

let gridRow = 64;
let gridColumn = 64;

function createGrid(y) {
  let boxHeight = y;
  let boxWidth = boxHeight;
  for (let x = 0; x < boxHeight * boxWidth; x++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style["height"] = `${(gridColumn / boxHeight) * 10}px`;
    box.style["width"] = `${(gridRow / boxWidth) * 10}px`;
    container.appendChild(box);
  }
}

createGrid(64);

const boxNodes = document.querySelectorAll(".box");

resetBtn.addEventListener("click", function (e) {
  let newHeight = prompt("What Grid Dimensions do you want - Max 64 * 64");
  if (newHeight > 0 && newHeight < 64) {
    boxNodes.forEach((e) => {
      e.style["height"] = `${(gridColumn / newHeight) * 10}px`;
      e.style["width"] = `${(gridRow / newHeight) * 10}px`;
      e.style["background-color"] = "white";
    });
  } else {
    alert("enter a positive integer between 0 - 64!");
  }
});
container.style["height"] = `${gridColumn * 10}px`;
container.style["width"] = `${gridRow * 10}px`;

function randomColor() {
  const randomNum = Math.floor(Math.random() * 256);
  return randomNum;
}

rainbowBtn.addEventListener("click", function (e) {
  rainbowOn = true;
});

plainBtn.addEventListener("click", function (e) {
  rainbowOn = false;
});

boxNodes.forEach((e) => {
  e.addEventListener("mouseenter", function (e) {
    if (rainbowOn) {
      e.target.style[
        "background-color"
      ] = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()}`;
    } else {
      e.target.style["background-color"] = "black";
    }
  });
});

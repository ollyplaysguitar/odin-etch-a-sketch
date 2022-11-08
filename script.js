"use strict";

let mouseStatus = 0;
const grid = document.querySelector(".grid");
const colorRed = document.querySelector(".red");
const colorGreen = document.querySelector(".green");
const colorBlue = document.querySelector(".blue");
const btnShowModal = document.querySelector(".btnShowModal");
const modal = document.querySelector(".modal-container");
const setGridButtons = document.querySelectorAll(".btnSetGrid");

const rgb = [0, 0, 0];

const gridItem = document.createElement("div");
gridItem.classList.add("grid-item");

const removeChildren = function (parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};

const getRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

const getColor = function () {
  const r = getRandomNumber(rgb[0]);
  const g = getRandomNumber(rgb[1]);
  const b = getRandomNumber(rgb[2]);
  return `rgb(${r},${g},${b})`;
};

const drawGrid = function (num) {
  modal.classList.add("hidden");
  //empty child nodes
  removeChildren(grid);
  //get shortest side
  const minSide = window.innerHeight <= window.innerWidth ? window.innerHeight : window.innerWidth;

  const gridSize = Math.floor(minSide / num);
  console.log("grid Size : ", gridSize);
  grid.style.gridTemplateColumns = `repeat(auto-fit, ${gridSize}px)`;
  grid.style.width = `${gridSize * num}px`;
  gridItem.style.height = `${gridSize}px`;

  for (let i = 0; i < num * num; i++) {
    grid.appendChild(gridItem.cloneNode());
  }
};

const hoverPaint = function (e) {
  if (mouseStatus === 1) {
    paint(e);
  }
};

const paint = function (e) {
  e.target.style.backgroundColor = getColor();
};

document.addEventListener("mousedown", (e) => (mouseStatus = 1));
document.addEventListener("mouseup", (e) => (mouseStatus = 0));
grid.addEventListener("mouseover", hoverPaint);
grid.addEventListener("click", paint);
colorRed.addEventListener("change", (e) => (rgb[0] = e.target.value));
colorGreen.addEventListener("change", (e) => (rgb[1] = e.target.value));
colorBlue.addEventListener("change", (e) => (rgb[2] = e.target.value));
btnShowModal.addEventListener("click", (e) => modal.classList.remove("hidden"));

setGridButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    btnShowModal.textContent = `${e.target.value}x${e.target.value}`;
    drawGrid(e.target.value);
  });
});

drawGrid(16);

"use strict";

const grid = document.querySelector(".grid");
console.log(grid);

const gridItem = document.createElement("div");
gridItem.classList.add("grid-item");

const drawGrid = function (num) {
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

drawGrid(12);

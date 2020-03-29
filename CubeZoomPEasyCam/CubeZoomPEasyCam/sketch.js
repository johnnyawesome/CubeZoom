/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

let cubeDistance;
let gridSize;

let gridSizeSlider,
  cubeSizeSlider,
  cubeDistanceSlider,
  redSlider,
  greenSlider,
  blueSlider,
  alphaSlider;

function setup() {
  createCanvas(650, 650, WEBGL);

  createEasyCam();
  // No right-click
  document.oncontextmenu = function () { return false; }

  angleMode(DEGREES);

  cubeSizeSlider = createSlider(2, 80, 60);
  cubeSizeSlider.position(10, 30);
  cubeSizeSlider.style('width', '60px');
  gridSizeSlider = createSlider(1, 500, 200);
  gridSizeSlider.position(10, 50);
  gridSizeSlider.style('width', '60px');
  cubeDistanceSlider = createSlider(81, 200, 100);
  cubeDistanceSlider.position(10, 70);
  cubeDistanceSlider.style('width', '60px');

  redSlider = createSlider(5, 255, 50);
  redSlider.position(10, 120);
  redSlider.style('width', '60px');
  greenSlider = createSlider(5, 255, 255);
  greenSlider.position(10, 140);
  greenSlider.style('width', '60px');
  blueSlider = createSlider(5, 255, 0);
  blueSlider.position(10, 160);
  blueSlider.style('width', '60px');
  alphaSlider = createSlider(65, 255, 200);
  alphaSlider.position(10, 180);
  alphaSlider.style('width', '60px');
}

function draw() {

  rotateY(frameCount * 0.1);
  noStroke();
  lights();
  drawCubes();
}

function drawCubes() {
  gridSize = gridSizeSlider.value();
  push();
  background(0, 30);
  let cubeColor = color(redSlider.value(), greenSlider.value(), blueSlider.value())
  cubeColor.setAlpha(alphaSlider.value());
  fill(cubeColor);

  for (let iz = -gridSize; iz < gridSize; iz += cubeDistanceSlider.value()) {
    push();
    translate(0, 0, iz);
    for (let iy = -gridSize; iy < gridSize; iy += cubeDistanceSlider.value()) {
      push();
      translate(0, iy, 0);
      for (let ix = -gridSize; ix < gridSize; ix += cubeDistanceSlider.value()) {
        push();
        translate(ix, 0, 0);
        box(cubeSizeSlider.value())
        pop();
      }
      pop();
    }
    pop();
  }
  pop();
}
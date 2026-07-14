// TODO //////////////////////////////////////////////
/*****************************************************

- add image save option
- set up URL flags so that you can share your chiikawa
- QR for both?

*****************************************************/

import { assets, characters } from "./data.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let controls = document.getElementById('controls');
let charL = document.getElementById('char-l');
let charR = document.getElementById('char-r');

let assetsLoaded = 0;

let baseUrl = 'assets/images/';

let loadComplete = false;
let allChars = Object.keys(characters);
let currentCharacter = 0;
let currentSlot = {
  face: 1,
  shirt: 1,
  pants: 1,
  accessory: 1
};

console.log(assets);

canvas.width = 2000;
canvas.height = 2300;


for (let i = 0; i < assets.length; i++) {
  const image = new Image(); // Using optional size for image
  image.onload = loaded; // Draw when image has loaded
  image.src = baseUrl + assets[i].url;
  console.log('loading', baseUrl + assets[i].url);
  assets[i].img = image;
}


function loaded() {
  console.log('loaded', this);
  assetsLoaded++;
  if (assetsLoaded >= assets.length) {
    loadComplete = true;
    start();
  }
}

function start() {
  controls.classList.remove('hidden');

  let slots = document.querySelectorAll('.slot');
  for (let i = 0; i < slots.length; i++) {
    slots[i].addEventListener('click', () => {
      changeSlot(slots[i].dataset.slot, parseInt(slots[i].dataset.dir))
    });
  }
  charL.addEventListener('click', () => {
    changeCharacter(-1);
  })
  charR.addEventListener('click', () => {
    changeCharacter(1);
  })
  let dl = document.getElementById('dl');
  dl.addEventListener('click', () => {
    download();
  })

  drawCharacter(allChars[currentCharacter]);
}

function changeCharacter(dir) {
  currentCharacter = loopInt(currentCharacter + dir, allChars.length - 1);
  drawCharacter(allChars[currentCharacter]);
}

function changeSlot(slot, dir) {
  currentSlot[slot] = loopInt(currentSlot[slot] + dir, characters[allChars[currentCharacter]][slot], 1);
  drawCharacter(allChars[currentCharacter]);
}

function drawCharacter(name) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(getImg('Paper').img, 0, 0);
  let base = characters[name].base;
  for (let i = 0; i < base.length; i++) {
    draw(name + '/' + base[i]);
  }
  draw(name + '/Clothes/Face' + currentSlot.face);
  draw(name + '/Clothes/Pants' + currentSlot.pants);
  draw(name + '/Clothes/Shirt' + currentSlot.shirt);
  draw(name + '/Clothes/Accessory' + currentSlot.accessory);
  draw('Names/' + name);
}

function drawLayers() {
  for (let i = 0; i < assets.length; i++) {
    ctx.drawImage(assets[i].img, 0, 0);
  }
}



function draw(name) {
  ctx.drawImage(getImg(name).img, 0, 0);
}


function getImg(name) {
  for (let i = 0; i < assets.length; i++) {
    let path = assets[i].url.substring(0, assets[i].url.lastIndexOf('.'));
    if (name == path) {
      return assets[i];
    }
  }
  console.error('could not find', name);
}

function download() {
  // Get the canvas
  var canvas = document.getElementById("canvas");
  // Convert the canvas to data
  var image = canvas.toDataURL();
  // Create a link
  var aDownloadLink = document.createElement('a');
  // Add the name of the file to the link
  aDownloadLink.download = allChars[currentCharacter] + '.png';
  // Attach the data to the link
  aDownloadLink.href = image;
  // Get the code to click the download link
  aDownloadLink.click();
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loopInt(val, max, min = 0) {
  console.log('looping to', val, max);
  if (val < min) {
    val = max;
  } else if (val > max) {
    val = min;
  }
  return val;
}
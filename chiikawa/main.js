// TODO //////////////////////////////////////////////
/*****************************************************

- add image save option
- set up URL flags so that you can share your chiikawa
- QR for both?

*****************************************************/

import { assets, raw_outfits, characters } from "./data.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let controls = document.getElementById('controls');
let charL = document.getElementById('char-l');
let charR = document.getElementById('char-r');

let startBtn = document.getElementById('start');
let loadingBar = document.getElementById('loading-bar');
let loadingFill = document.querySelector('#loading-bar div');
startBtn.addEventListener('click', load);

let assetsLoaded = 0;

let baseUrl = 'assets/images/';

let loadComplete = false;
let allChars = Object.keys(characters);
let currentCharacter = 0;
let currentSlot = {
  face: 0,
  shirt: 0,
  pants: 0,
  accessory: 0
};
let currentBg = 0;
let allBgs = assets.filter(x => x.file.indexOf('Backgrounds') > -1);

console.log(assets);

canvas.width = 2000;
canvas.height = 2300;

let outfits = {
  chiikawa: {
    accessory: [''],
    face: [],
    pants: [''],
    shirt: [''],
  },
  furuhonya: {
    accessory: [''],
    face: [],
    pants: [''],
    shirt: [''],
  },
  hachiware: {
    accessory: [''],
    face: [],
    pants: [''],
    shirt: [''],
  },
  kurimanju: {
    accessory: [''],
    face: [],
    pants: [''],
    shirt: [''],
  },
  momonga: {
    accessory: [''],
    face: [],
    pants: [''],
    shirt: [''],
  },
  rakko: {
    accessory: [''],
    face: [],
    pants: [''],
    shirt: [''],
  },
  shisa: {
    accessory: [''],
    face: [],
    pants: [''],
    shirt: [''],
  },
  usagi: {
    accessory: [''],
    face: [],
    pants: [''],
    shirt: [''],
  },
};
for (let i = 0; i < raw_outfits.length; i++) {
  let item = raw_outfits[i];
  // get the second matching instance which will be after "clothes"
  // this is one of the most insane lines of code i've ever written
  let slot = [...item.file.matchAll(/\/[a-zA-Z]+/g)].flat()[1].toLowerCase().substring(1);
  if (item.chiikawa) { outfits.chiikawa[slot].push(item.file) }
  if (item.furuhonya) { outfits.furuhonya[slot].push(item.file) }
  if (item.hachiware) { outfits.hachiware[slot].push(item.file) }
  if (item.kurimanju) { outfits.kurimanju[slot].push(item.file) }
  if (item.momonga) { outfits.momonga[slot].push(item.file) }
  if (item.rakko) { outfits.rakko[slot].push(item.file) }
  if (item.shisa) { outfits.shisa[slot].push(item.file) }
  if (item.usagi) { outfits.usagi[slot].push(item.file) }
}
console.log('outfits', outfits);


function loadSingle(url, callback) {
  const image = new Image();
  image.onload = () => { callback(image); };
  image.src = url;
  console.log('loading', url);
}

loadSingle(baseUrl + 'Start.PNG', (image) => {
  ctx.drawImage(image, 0, 0);
});

function load() {
  startBtn.classList.add('hidden');
  loadingBar.classList.remove('hidden');
  for (let i = 0; i < raw_outfits.length; i++) {
    const image = new Image(); // Using optional size for image
    image.onload = loaded; // Draw when image has loaded
    image.src = baseUrl + raw_outfits[i].file;
    // console.log('loading', baseUrl + raw_outfits[i].file);
    raw_outfits[i].img = image;
  }
  for (let i = 0; i < assets.length; i++) {
    const image = new Image(); // Using optional size for image
    image.onload = loaded; // Draw when image has loaded
    image.src = baseUrl + assets[i].file;
    // console.log('loading', baseUrl + assets[i].file);
    assets[i].img = image;
  }
}



function loaded() {
  // console.log('loaded', this);
  assetsLoaded++;
  loadingFill.style.width = ((assetsLoaded / raw_outfits.length) * 100) + '%';
  if (assetsLoaded >= raw_outfits.length + assets.length) {
    loadComplete = true;
    start();
  }
}

function start() {
  controls.classList.remove('hidden');
  loadingBar.classList.add('hidden');

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
  if (slot == 'bg') {
    currentBg = loopInt(currentBg + dir, allBgs.length - 1, 0);
    drawCharacter(allChars[currentCharacter]);
    return;
  }
  let char = allChars[currentCharacter].toLowerCase();
  currentSlot[slot] = loopInt(currentSlot[slot] + dir, outfits[char][slot].length - 1, 0);
  console.log('drawing', outfits[char][slot][currentSlot[slot]]);
  drawCharacter(allChars[currentCharacter]);
}

function drawCharacter(name) {
  drawBg();
  let base = characters[name].base;
  for (let i = 0; i < base.length; i++) {
    draw(name + '/' + base[i]);
  }
  draw(outfits[name.toLowerCase()].face[currentSlot.face]);
  draw(outfits[name.toLowerCase()].pants[currentSlot.pants]);
  draw(outfits[name.toLowerCase()].shirt[currentSlot.shirt]);
  draw(outfits[name.toLowerCase()].accessory[currentSlot.accessory]);
  draw('Names/' + name);
}

function drawBg() {
  let bg = allBgs[currentBg];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bg.img, 0, 0);
}

function drawLayers() {
  for (let i = 0; i < assets.length; i++) {
    ctx.drawImage(assets[i].img, 0, 0);
  }
}



function draw(name) {
  name = name.replace('.PNG', '');
  let img = getImg(name);
  if (!img) { return; }
  ctx.drawImage(img.img, 0, 0);
}


function getImg(name) {
  if (name.length < 1) { return; }
  for (let i = 0; i < assets.length; i++) {
    let path = assets[i].file.substring(0, assets[i].file.lastIndexOf('.'));
    if (name == path) {
      return assets[i];
    }
  }
  for (let i = 0; i < raw_outfits.length; i++) {
    let path = raw_outfits[i].file.substring(0, raw_outfits[i].file.lastIndexOf('.'));
    if (name == path) {
      return raw_outfits[i];
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
  if (val < min) {
    val = max;
  } else if (val > max) {
    val = min;
  }
  return val;
}
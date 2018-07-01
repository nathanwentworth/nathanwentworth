var letters = 'abcdefghijklmnopqrstuvwxyz '
var windowSize = { h: 0, w: 0 }

var e4Parent = document.getElementById('e4')
var e4Text = 'feisar'
var e4NewText = ''
var e4Loops = 0;

var e9Parent = document.getElementById('e9')
var parallaxObjs = e9Parent.querySelectorAll('div[data-offset]')


window.addEventListener('load', init, false)

function init() {
  updateWindowSize()
  window.addEventListener('resize', updateWindowSize, false)
  window.requestAnimationFrame(e4)
  e9Parent.addEventListener('mousemove', e9, false)
  e9Parent.addEventListener('mouseleave', e9Reset, false)
}

function updateWindowSize () {
  windowSize.w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  windowSize.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
}


function e4 () {
  if (e4Loops === 1) {
    e4NewText = ''
    e4Text = e4Text.toLowerCase()
  }
  if (e4NewText.length < e4Text.length) {
    e4NewText += letters[randomInt(letters.length)]
  }
  for (var i = 0; i < e4Text.length; i++) {
    if (e4Loops > 240) {
      e4Loops = 0;
    } else if (e4Loops > 120) {
      e4NewText = e4Text
    } else if (e4NewText[i] != e4Text[i]) {
      var newLetter = letters[randomInt(letters.length)]
      e4NewText = e4NewText.substr(0, i) + newLetter + e4NewText.substr(i + 1)
    }
  }

  if (e4Parent.innerText !== e4NewText) {
    e4Parent.innerText = e4NewText
  }

  e4Loops++;

  window.requestAnimationFrame(e4)
}

function e9 (e) {
  var parentRect = e9Parent.getBoundingClientRect()
  var pos = { x: e.clientX, y: e.clientY }
  var posRatio = { x: ((pos.x - parentRect.left) / parentRect.width), y: ((pos.y - parentRect.top) / parentRect.height)}

  if (posRatio.x < 0) { posRatio.x = 0 }
  else if (posRatio.x > 1) { posRatio.x = 1 }
  if (posRatio.y < 0) { posRatio.y = 0 }
  else if (posRatio.y > 1) { posRatio.y = 1 }

  for (var i = 0; i < parallaxObjs.length; i++) {
    var pxOffset = parallaxObjs[i].dataset.offset;
    parallaxObjs[i].style.transform = `translate(${pxOffset * (posRatio.x - 0.5)}px, ${pxOffset * (posRatio.y - 0.5)}px)`
  }
}

function e9Reset (e) {
  var pos = { clientX: 100, clientY: 100 }


  e9(pos)
}


function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function clamp(x, min, max) {

  return x
}























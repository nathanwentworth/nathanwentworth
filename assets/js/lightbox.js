'use strict'

window.addEventListener('load', function () {
  document.body.classList.add('js');
  document.body.classList.remove('no-js');

  let images = document.querySelectorAll('.content img');
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', lightbox.setImg, false);
  }
});

var lightbox = function () {
  var elem = document.getElementById('lightbox');
  var img = document.getElementById('lightboxImg');
  var arrowL = document.getElementById('arrow-left');
  var arrowR = document.getElementById('arrow-right');
  var index = 0;
  var hidden = !elem.classList.contains('hidden');

  function init() {
    elem.addEventListener('click', function () {
      img.src = '';
      display(false);
    }, false)
  }
  init();

  function setImg(_img) {
    if (_img.currentTarget) {
      img.src = _img.currentTarget.src;
    } else {
      img.src = _img;
    }
    lightbox.display(true);
  }

  function display(disp) {
    hidden = !disp;
    elem.classList.toggle('hidden', !disp)
    document.body.classList.toggle('no-scroll', disp);
  }

  return {
    setImg: setImg,
    display: display,
    hidden: hidden
  }
}();


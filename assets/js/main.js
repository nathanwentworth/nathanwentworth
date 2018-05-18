'use strict'

window.addEventListener('load', function () {
  document.body.classList.add('js');
  document.body.classList.remove('no-js');

  let images = document.querySelectorAll('.content img');
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', zoomImg, false);
  }
});

zoomImg(e) {

}


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
    img.src = _img;
    lightbox.display(true);
  }

  function display(disp) {
    hidden = !disp;
    elem.classList.toggle('hidden', !disp)
    // PreventScroll(disp);
  }

  return {
    setImg: setImg,
    display: display,
    hidden: hidden
  }
}();


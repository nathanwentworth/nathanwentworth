'use strict'

let imageElements = [];
window.addEventListener('load', function () {
  document.body.classList.add('js');
  document.body.classList.remove('no-js');

  let images = document.querySelectorAll('.content img');
  if (images.length < 1) {
    images = document.querySelectorAll('.photos img');
  }
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', lightbox.setImg, false);
    imageElements.push(images[i]);
  }

  lightbox.init();
});

window.addEventListener('keydown', function (e) {
  if (!lightbox.hidden) {
    // esc, close lightbox
    if (e.keyCode == 27) {
      lightbox.display(false);
      // left/a, go left in lightbox
    } else if (e.keyCode == 37 || e.keyCode == 65) {
      lightbox.increment(-1);
      // right/d, go right in lightbox
    } else if (e.keyCode == 39 || e.keyCode == 68) {
      lightbox.increment(1);
    }
  } else {
    // esc, toggle sidebar
    if (e.keyCode == 27) {
      ToggleSection(sidebar);
      options.sidebar = !options.sidebar;
      _options.save(options);
      // ?, toggle key command dialog
    } else if (e.shiftKey && e.keyCode == 191) {
      ToggleSection(keyCommandDialog);
    }
  }
});


var lightbox = function () {
  var elem = document.getElementById('lightbox');
  var img = document.getElementById('lightboxImg');
  var arrow = {
    l: document.getElementById('arrow-left'),
    r: document.getElementById('arrow-right')
  }
  let index = 0;
  var hidden = !elem.classList.contains('hidden');

  function init() {
    if (imageElements.length > 1) {
      arrow.l.addEventListener('click', function (e) {
        increment(-1);
        e.stopPropagation();
      })

      arrow.r.addEventListener('click', function (e) {
        increment(1);
        e.stopPropagation();
      })
    } else {
      arrow.l.classList.add('hidden');
      arrow.r.classList.add('hidden');
    }

    elem.addEventListener('click', function () {
      img.src = '';
      display(false);
    }, false)
  }

  function setImg(_img) {
    if (_img.currentTarget) {
      img.src = _img.currentTarget.dataset.lgSrc || _img.currentTarget.src;
    } else if ((_img.dataset && _img.dataset.lgSrc) || _img.src) {
      img.src = _img.dataset.lgSrc || _img.src
    } else {
      img.src = _img;
    }
    lightbox.display(true);
  }

  function setIndex(_index) {
    index = _index;
  }

  function increment(amount) {
    if (imageElements.length < 1) { return; }
    index += amount;
    if (index < 0) {
      index = imageElements.length - 1;
    } else if (index >= imageElements.length) {
      index = 0;
    }
    img.src = imageElements[index].dataset.lgSrc || imageElements[index].src
  }

  function display(disp) {
    hidden = !disp;
    elem.classList.toggle('hidden', !disp)
    document.body.classList.toggle('no-scroll', disp);
  }

  return {
    setImg: setImg,
    increment: increment,
    display: display,
    index: index,
    setIndex: setIndex,
    hidden: hidden,
    init: init
  }
}();

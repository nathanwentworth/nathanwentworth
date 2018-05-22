'use strict'

let entries = null;
let pageTitle = null;
let nothingFound = null;
let filterInput = null;
let btnSubmit = null;
let btnClear = null;

let currentTag = ''

window.addEventListener('load', function () {
  document.body.classList.add('js');
  document.body.classList.remove('no-js');
  window.addEventListener('hashchange', function() {
    if (window.location.hash) {
      filter(window.location.hash)
    } else {
      clearFilter()
    }
  }, false);

  entries = document.querySelectorAll('.entry');
  pageTitle = document.querySelector('.archive-title');
  nothingFound = document.querySelector('#nothing-found');
  filterInput = document.querySelector('#filter-input');
  btnSubmit = document.querySelector('#submit');
  if (btnSubmit && filterInput) {
    btnSubmit.addEventListener('click', function () { filter(filterInput.value) });
  }
  btnClear = document.querySelector('#clear-filter');
  if (btnClear) {
    btnClear.addEventListener('click', clearFilter);
  }

  if (window.location.hash) {
    filter(window.location.hash);
  } else {
    clearFilter()
  }
});

function filter(match) {
  if (match.length < 1 || match === '#') {
    location.hash = '';
    clearFilter();
    return;
  }

  match = match.replace('#', '');
  match = match.replace(/%20/, ' ');

  let newTag = '';
  let matchArr = match.split(':')
  let prefix = 't'
  if (matchArr.length > 1) {
    prefix = matchArr[0]
    currentTag = matchArr[1];
  } else {
    currentTag = matchArr[0];
    prefix = (isNumeric(currentTag)) ? 'y' : 't';
  }

  currentTag = currentTag.toLowerCase();
  filterInput.value = currentTag;
  pageTitle.className = 'archive-title' + ' tag--' + currentTag.replace(' ', '-');

  let amountShown = 0;

  location.hash = prefix + ':' + currentTag;

  for (var i = 0; i < entries.length; i++) {
    let entry = entries[i];
    let values = entry.dataset[prefix].split('|')
    let hide = true;
    for (var j = 0; j < values.length; j++) {
      if (values[j].toLowerCase() === currentTag) {
        hide = false;
        break;
      }
    }

    entry.classList.toggle('hidden', hide);
    if (!hide) {
      amountShown++;
    }
  }

  toggleNothingFound(amountShown > 0)
}

function toggleNothingFound(state) {
  if (!nothingFound) {
    return;
  }
  if (btnClear) {
    btnClear.classList.remove('hidden');
  }
  if (state) {
    nothingFound.classList.add('hidden');
  } else {
    nothingFound.classList.remove('hidden')
    nothingFound.textContent = 'Nothing found for tag: ' + currentTag;
  }
}

function clearFilter() {
  if (!filterInput) {
    return;
  }

  pageTitle.className = 'archive-title'
  toggleNothingFound(true);
  if (btnClear) {
    btnClear.classList.add('hidden');
  }
  filterInput.value = '';
  // location.hash = '';
  history.replaceState({}, document.title, ".");

  for (var i = 0; i < entries.length; i++) {
    entries[i].classList.remove('hidden');
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


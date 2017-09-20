'use strict';

var projectItems = document.getElementsByClassName('project-item');
var filterElement = document.getElementById('filter');
var currentFilter = '';

window.addEventListener('load', function () {
  filterElement.addEventListener("click", function() {
    clearFilters();
  });

  var tagElements = document.getElementsByClassName('tag');
  for (var i = 0; i < tagElements.length; i++) {
    tagElements[i].addEventListener("click", function() {
      redisplayProjects(this.dataset.tag);
    });
  }
}, false);

function redisplayProjects(tag) {
  if (currentFilter != tag) {
    currentFilter = tag;

    for (var i = 0; i < projectItems.length; i++) {
      var includesTag = (!projectItems[i].dataset.tags.toLowerCase().includes(tag));
      projectItems[i].classList.toggle('hidden', includesTag);

      var projectChildren = projectItems[i].getElementsByTagName('span');
      for (var j = 0; j < projectChildren.length; j++) {
        var isTag = (projectChildren[j].dataset.tag === tag);
        projectChildren[j].classList.toggle('selected', isTag);
      }
    }

    filterElement.textContent = "filtering for: " + tag + " (click to clear)";
    filterElement.classList.add('filter-on');
  } else {
    clearFilters();
  }
}

function clearFilters() {
  for (var i = 0; i < projectItems.length; i++) {
    projectItems[i].classList.remove('hidden');

    var projectChildren = projectItems[i].getElementsByTagName('span');
    for (var j = 0; j < projectChildren.length; j++) {
      projectChildren[j].classList.remove('selected');
    }
  }

  currentFilter = "";
  filterElement.classList.remove('filter-on');
}

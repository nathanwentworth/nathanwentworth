var projectElems;
var roleElemts;
var madeElemts;
var filterElem;
var sidebarHeadings;

var currentFilter;

window.onload = function () {

  projectElems = document.getElementsByClassName('project-item');
  roleElemts = document.getElementsByClassName('role');
  madeElemts = document.getElementsByClassName('made');
  filterElem = document.getElementById('filter');
  filterElem.addEventListener("click", function() {
    clearFilters();
  });
  sidebarHeadings = document.getElementById('desc').getElementsByClassName('btn');

  init();
}

function init() {
  for (var i = 0; i < roleElemts.length; i++) {
    var roleElemChildren = roleElemts[i].getElementsByTagName('span');
    for (var j = 0; j < roleElemChildren.length; j++) {
      roleElemChildren[j].addEventListener("click", function() {
        var text = this.innerText.toLowerCase();
        redisplayProjects("roles", text, event);
      });
    }
  }

  for (var i = 0; i < madeElemts.length; i++) {
    var madeElemChildren = madeElemts[i].getElementsByTagName('span');
    for (var j = 0; j < madeElemChildren.length; j++) {
      madeElemChildren[j].addEventListener("click", function() {
        var text = this.innerText.toLowerCase();
        redisplayProjects("tags", text, event);
      });
    }
  }

  for (var i = 0; i < sidebarHeadings.length; i++) {
    sidebarHeadings[i].addEventListener('click', function() {
      var text = this.innerText.toLowerCase();
      redisplayProjects("type", text, event);
    });
  }
}

function redisplayProjects(type, category, event) {

  console.log(category);

  if (currentFilter != category) {
    currentFilter = category;

    for (var i = 0; i < projectElems.length; i++) {
      if (!projectElems[i].dataset[type].toLowerCase().includes(category)) {
        projectElems[i].style.display = "none";
      } else {
        projectElems[i].style.display = "initial";
      }

      var projectChildren = projectElems[i].getElementsByTagName('span');
      for (var j = 0; j < projectChildren.length; j++) {
        if (projectChildren[j].innerText.toLowerCase().includes(category)) {
          projectChildren[j].classList.add('selected');
        } else {
          projectChildren[j].classList.remove('selected');
        }
      }

    }

    filterElem.innerText = "filtering for: " + category + " (click to clear)";
    filterElem.classList.remove('filter-off');
    filterElem.classList.add('filter-on');
  } else {
    clearFilters();
  }

}

function clearFilters() {
  for (var i = 0; i < projectElems.length; i++) {
    projectElems[i].style.display = "initial";

    var projectChildren = projectElems[i].getElementsByTagName('span');
    for (var j = 0; j < projectChildren.length; j++) {
      projectChildren[j].classList.remove('selected');
    }

  }

  currentFilter = "";

  filterElem.classList.remove('filter-on');
  filterElem.classList.add('filter-off');

  setTimeout(function() {
    filterElem.innerText = "";
  }, 550);
}


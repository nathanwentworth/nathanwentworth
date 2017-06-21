
var list;
var listElem;
var addField;

window.onload = function () {
  init();
}

function init() {
  listElem = document.getElementById('list');
  addField = document.getElementById('add');
  addField.addEventListener('keyup', addToDoItem);

  load();
  displayList(true);
}

// load localstorage data
function load() {
  list = localStorage.getItem('list');
  if (list == null) {
    list = [];
  } else {
    list = JSON.parse(list);
  }

  console.log('list loaded!');
  console.log(list);
}

// debug function, deletes all stored data
function deleteAll() {
  localStorage.removeItem('list');
}

// save localstorage data
function save() {
  localStorage.setItem('list', JSON.stringify(list));
  console.log('list saved!');
}

// write list
function displayList(initialLoad) {
  // first remove all child nodes
  while (listElem.hasChildNodes()) {
    listElem.removeChild(listElem.lastChild);
  }

  // then create new child nodes from the list
  for (var i = 0; i < list.length; i++) {
    // create the initial list node, top level parent
    var listNode = document.createElement('li');
    if (initialLoad) {
      listNode.style.animation = '1s forwards slide-down, 1s forwards fade-in';
      listNode.style.opacity = '0';
      listNode.style.transform = 'translateY(-16px)';
      listNode.style.animationDelay = 0.1 * i + "s";
    }

    var listText = document.createTextNode(list[i]);
    listNode.appendChild(listText);

    // then create the node that will act as the x button
    var closeNode = document.createElement('span');
    closeNode.appendChild(document.createElement('div'));
    closeNode.appendChild(document.createElement('div'));

    // add the close event listener to the x node
    closeNode.addEventListener('click', removeToDoItem);

    listNode.appendChild(closeNode);

    // inserts the new todo item at the top of the list
    listElem.appendChild(listNode);
    // listElem.insertBefore(listNode, listElem.firstChild);
  }
}

// add element to the list
function addToDoItem(event) {
  var text = add.value;

  if (event.keyCode == 13 && text != "") {
    list.push(text);
    displayList(false);
    add.value = "";
  }

  save();
}

// remove elements from the list
function removeToDoItem(event) {
  var e = findParentElem(event.target);
  var value = e.innerText.trim();
  var index = -1;

  for (var i = 0; i < list.length; i++) {
    if (list[i].valueOf() == value.valueOf()) {
      index = i;
      break;
    }
  }

  if (index > -1) {
    list.splice(index, 1);
  }

  displayList(false);
  save();
}

function findParentElem(elem) {
  var elem;
  if (elem.nodeName != 'LI') {
    var parent = elem.parentElement;
    if (parent !== null) {
      elem = parent;
      return findParentElem(elem);
    } else {
      console.log("couldn't find an LI parent!");
    }
  } else {
    return elem;
  }
}

// old code!!!!!!!!


// $(document).ready(function($) {

//   var regex = /\","\b/g;
//   var arr = Cookies.get('list');
//   var i = 0;
//   splitarr = 0;

//   if (typeof arr == 'undefined') {
//     console.log("splitarr");
//     // arr = "[]";
//     // Cookies.set('list', arr, { expires: 365, path: '' });
//   } else {
//     var shortened = arr.substring(2, arr.length-2);
//     splitarr = shortened.split(regex);

//     console.log(splitarr);

//     var splitlength = splitarr.length;

//     if (splitlength < 4) {
//       $('ul:first-child').children('li').remove()
//     }
//     else {
//      $('ul:first-child').children('li').remove()

//       while (splitarr[i]) {
//         $('ul:first-child').append('<li>' + splitarr[i] + '<span><div></div><div></div></span></li>')
//         i++;
//       }
//     }
//   }



//   $('ul:first-child').sortable().draggable();


//   $(document).on('keydown', 'input', function() {
//     $('ul:first-child').sortable().draggable();
//   });

//   $(document).on('click', '#save', function() {
//     var arr = $('ul:first-child > li').map(function() { return $(this).text() }).get();
//     console.log(arr);
//     Cookies.set('list', arr, { expires: 365, path: '' });
//   });

  // $(document).on('click', '#load', function() {
  //   // var regex = /([',[\]"])\W/g;
  //   var regex = /\","\b/g;
  //   var arr = Cookies.get('list');
  //   var i = 0;

  //   var shortened = arr.substring(2, arr.length-2);
  //   var splitarr = shortened.split(regex);

  //   console.log(splitarr);

  //   $('ul:first-child').children('li').remove()

  //   while (splitarr[i]) {
  //     $('ul:first-child').append('<li>' + splitarr[i] + '<span><div></div><div></div></span></li>')
  //     i++;
  //   }
  //   $('ul:first-child').sortable().draggable();
  // });

//   $(document).on('click', 'span', function() {
//     $(this).parent('li').remove();
//   });

//   $(document).on('mouseover', 'ul:first-child li', function() {
//     $(this).children('span').css('visibility', 'visible');
//   });
//   $(document).on('mouseover', 'ul:first-child li span', function() {
//     $(this).css('visibility', 'visible');
//   });
//   $(document).on('mouseout', 'ul:first-child li', function() {
//     $(this).children('span').css('visibility', 'hidden');
//   });

//   $('input').keyup(function(event) {
//     var textinput = $('input').val();
//     if(event.keyCode == 13 && textinput != "") {
//       $('ul:first-child').append('<li>' + textinput + '<span><div></div><div></div></span></li>');
//       $('input[type=text]').val('');
//     }
//   });
// });
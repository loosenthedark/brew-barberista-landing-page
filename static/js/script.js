const body = document.querySelector('.element-body');
const hamburger = document.querySelector('.navbar-toggler');
const icon = document.querySelector('.navbar-toggler-icon');
const pressButton = document.querySelector('.btn-press');
const pressList = document.querySelector('#press-list');
const pressLink = document.querySelector('.press-list-link');
const collapse = document.querySelector('.collapse');
const menu = document.querySelector('.navbar-nav');

function showMenu() {
  collapse.classList.toggle('toggled');
  menu.classList.toggle('show');
  // TRIANGLE.classList.toggle('show');
  hamburger.getAttribute('aria-expanded') == 'false' ? hamburger.setAttribute('aria-expanded', true) : hamburger.setAttribute('aria-expanded', false);
  
}

function hideMenus() {
  collapse.classList.remove('toggled');
  menu.classList.remove('show');
  pressList.classList.remove('press-reveal');
}

// Hide nav menu when touch or click happens elsewhere:
function clickTarget(e) {
  if (e.target !== icon && e.target !== pressButton && e.target !== pressLink) {
    hideMenus();
  }
}

// Listen for hamburger icon clicks
hamburger.addEventListener('click', showMenu, false);

// Listen for clicks anywhere on screen:
body.addEventListener('click', function (e) { clickTarget(e); }, true);

function showPress() {
  var x = document.getElementById("press-list");
  if (x.className.indexOf("press-reveal") == -1) {
    x.className += "press-reveal";
  } else { 
    x.className = x.className.replace("press-reveal", "");
  }
}
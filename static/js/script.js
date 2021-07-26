const BODY = document.querySelector('.element-body');
const HAMBURGER = document.querySelector('.navbar-toggler');
const ICON = document.querySelector('.navbar-toggler-icon');
const TRIANGLE = document.querySelector('.triangle-left');
const COLLAPSE = document.querySelector('.collapse');
const MENU = document.querySelector('.navbar-nav');

function showMenu() {
  COLLAPSE.classList.toggle('toggled');
  MENU.classList.toggle('show');
  TRIANGLE.classList.toggle('show');
  HAMBURGER.getAttribute('aria-expanded') == 'false' ? HAMBURGER.setAttribute('aria-expanded', true) : HAMBURGER.setAttribute('aria-expanded', false);
  
}

function hideMenu() {
  MENU.classList.remove('show');
  TRIANGLE.classList.remove('show');
}

// Hide nav menu when touch or click happens elsewhere:
function clickTarget(e) {
  if (e.target !== ICON && e.target !== TRIANGLE) {
    hideMenu();
  }
}

// Listen for hamburger icon clicks
HAMBURGER.addEventListener('click', showMenu, false);

// Listen for clicks anywhere on screen:
BODY.addEventListener('click', function (e) { clickTarget(e); }, true);
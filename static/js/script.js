const body = document.querySelector('.element-body');
const hamburger = document.querySelector('.navbar-toggler');
const icon = document.querySelectorAll('.navbar-toggler-icon');
const pressButton = document.querySelector('.btn-press');
const pressList = document.querySelector('#press-list');
const pressLink = document.querySelector('.press-list-link');
const collapse = document.querySelector('.collapse');
const menu = document.querySelector('.navbar-nav');
const animateNavToggler = document.getElementById("nav-toggler");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const coffeeIcon = document.querySelector(".coffee-icon");

function showMenu() {
  collapse.classList.toggle('toggled');
  menu.classList.toggle('show');
  if (pressList.className.indexOf('press-reveal') !== -1) {
    pressList.className = pressList.className.replace('press-reveal', '');
  }
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
hamburgerIcon.addEventListener('click', showMenu, false);

// Listen for clicks anywhere on screen:
body.addEventListener('click', function (e) { clickTarget(e); }, true);

function showPress() {
  var x = document.getElementById('press-list');
  if (x.className.indexOf('press-reveal') == -1) {
    x.className += 'press-reveal';
  } else {
    x.className = x.className.replace('press-reveal', '');
  }
}

// Code block adapted from https://jsfiddle.net/amirsaleem/xpd1wr7n/

// Listen for page scroll
window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById('btn-back-to-top');
  // Show button if user scrolls more than 500px from top
  if (window.pageYOffset > 500) {
    backToTopButton.style.display = "block";
  }
  // hide it when user is less than 500px from top
  else if (window.pageYOffset < 500) {
    backToTopButton.style.display = "none";
  }
}, false);

animateNavToggler.addEventListener("click", function () {
  hamburgerIcon.classList.toggle('active');
  coffeeIcon.classList.toggle('active');
});
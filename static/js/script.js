/* jshint esversion: 8 */

// Variable declarations...
const body = document.querySelector('.element-body');
const hamburger = document.querySelector('.navbar-toggler');
const icon = document.querySelectorAll('.navbar-toggler-icon');
const pressButton = document.querySelector('.btn-press');
const pressList = document.querySelector('#press-list');
const pressLink = document.querySelector('.press-list-link');
const collapse = document.querySelector('.collapse');
const menu = document.querySelector('.navbar-nav');
const animateNavToggler = document.getElementById('nav-toggler');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const coffeeIcon = document.querySelector('.coffee-icon');
const videoCoffee = document.getElementById('video-coffee');
const videoBarber = document.getElementById('video-barber');

function showMenu() {
    collapse.classList.toggle('toggled');
    menu.classList.toggle('show');
    if (pressList.className.indexOf('press-reveal') !== -1) {
        pressList.className = pressList.className.replace('press-reveal', '');
    }
    let ariaState = hamburger.getAttribute('aria-expanded');
    if (ariaState == 'false') {
        hamburger.setAttribute('aria-expanded', true);
    } else {
        hamburger.setAttribute('aria-expanded', true);
    }
}

function hideMenus() {
    collapse.classList.remove('toggled');
    menu.classList.remove('show');
    pressList.classList.remove('press-reveal');
    hamburgerIcon.classList.remove('active');
    coffeeIcon.classList.remove('active');
}

// Hide nav menu when touch or click happens elsewhere...
function clickTarget(e) {
    if (e.target !== icon && e.target !== pressButton && e.target !== pressLink) {
        hideMenus();
    }
}

// Listen for hamburger icon clicks...
hamburgerIcon.addEventListener('click', showMenu, false);

// Listen for clicks anywhere on screen...
body.addEventListener('click', function (e) {
    clickTarget(e);
}, true);

// Slide Press submenu into view on click...
function showPress() {
    var x = document.getElementById('press-list');
    if (x.className.indexOf('press-reveal') == -1) {
        x.className += 'press-reveal';
    } else {
        x.className = x.className.replace('press-reveal', '');
    }
}

// Code block adapted from https://jsfiddle.net/amirsaleem/xpd1wr7n/
// Listen for page scroll...
window.addEventListener('scroll', function () {
    var backToTopButton = document.getElementById('btn-back-to-top');
    // Show button if user scrolls more than 500px from top...
    if (window.pageYOffset > 500) {
        backToTopButton.style.display = 'block';
    }
    // hide it when user is less than 500px from top...
    else if (window.pageYOffset < 500) {
        backToTopButton.style.display = 'none';
    }
}, false);

// Custom nav toggler icon animation on click - code block adapted from https://www.youtube.com/watch?v=g7v4BB9IMRw
animateNavToggler.addEventListener('click', function () {
    hamburgerIcon.classList.toggle('active');
    coffeeIcon.classList.toggle('active');
});
coffeeIcon.addEventListener('click', function () {
    coffeeIcon.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
});

// Play multiple videos in background above the fold on desktop...
// Adapted from https://stackoverflow.com/questions/54380721/how-do-i-loop-through-multiple-background-videos
window.onload = function () {
    // speed up above-the-fold video backgrounds cf. https://stackoverflow.com/questions/3027707/how-to-change-the-playing-speed-of-videos-in-html5
    // BUG WORKAROUND: conditional check for Firefox in place to prevent frozen video bug caused by dynamically altering playback speed in JS (cf. https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser)
    // sped-up videos now play in all browsers except Firefox (normal speed)
    if (typeof InstallTrigger === 'undefined') {
        videoCoffee.playbackRate = 2;
        videoBarber.playbackRate = 1.5;
    }
    // Once the window has loaded, listen for the end of the first video and trigger the start of the second video...
    videoCoffee.addEventListener('ended', () => {
        videoCoffee.style.display = 'none';
        videoBarber.style.display = 'block';
        videoBarber.style.opacity = '.5';
        playVideo(videoBarber);
    });
    videoBarber.addEventListener('ended', () => {
        videoBarber.style.display = 'none';
        videoCoffee.style.display = 'block';
        // BUG WORKAROUND: These values need to be set to prevent a bug seen in all browsers whereby video brightness/saturation/contrast appears altered when video(s) plays for a secnd/third/fourth (etc.) time
        // 02/08/21: bug still present in Safari, but rectified in all other browsers tested
        videoCoffee.style.opacity = '.75';
        videoCoffee.style.filter = "saturate(100%)";
        videoCoffee.style.filter = "contrast(100%)";
        videoCoffee.style.filter = "brightness(50%)";
        playVideo(videoCoffee);
    });
};

function playVideo(video) {
    // This playVideo function takes in the ID of a video element and plays that video...
    video.play();
}
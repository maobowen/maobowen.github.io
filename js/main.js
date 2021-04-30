'use strict';

// Closes the sidebar menu
$('.menu-toggle').click((e) => {
  e.preventDefault();
  $('#sidebar-wrapper').toggleClass('active');
  $('.menu-toggle > .fa-bars, .menu-toggle > .fa-times').toggleClass('fa-bars fa-times');
  $(e.target).toggleClass('active');
});

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click((e) => {
  let _this = e.target;  // https://stackoverflow.com/a/49449345
  if (location.pathname.replace(/^\//, '') == _this.pathname.replace(/^\//, '') && location.hostname == _this.hostname) {
    let target = $(_this.hash);
    target = target.length ? target : $('[name=' + _this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, 'easeInOutExpo');
      return false;
    }
  }
});

// Scroll to top button appear
$(document).scroll((e) => {
  let scrollDistance = $(e.target).scrollTop();
  if (scrollDistance > 100) {
    $('.scroll-to-top').fadeIn();
  } else {
    $('.scroll-to-top').fadeOut();
  }
});

// Generate greetings
let hour = new Date().getHours();
let period;
if (hour >= 3 && hour < 12) {
  period = 'morning';
} else if (hour >= 12 && hour < 17) {
  period = 'afternoon';
} else {
  period = 'evening';
}
$('#period').text(period);

// Generate current year
$('#current-year').text(new Date().getFullYear());

$(document).ready(function() {
  "use strict";

  // Apply ripples effect to the .slider element
  $('.slider').ripples({
    dropRadius: 9,
    perturbance: 0.01
  });

  // Initialize Typed.js effect
  var typed = new Typed('#element', {
    strings: [
      "<strong><span style='font-weight: bold;'>Hello</span></strong> <strong class='primary' style='color: orangered;'>World !</strong>",
      "I'm<strong class='primary' style='color: orangered;'> Hamza</strong>, your <strong><span style='color: orangered;'>Coding Assistant !</span></strong> "
    ],
    typeSpeed: 30,
    loop: true
  });
  $('#element').addClass('typed-blink');
});

$('.work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});









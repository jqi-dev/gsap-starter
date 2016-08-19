// DEMO FILE

// Set up variables

var ITEM1 = "#Item1";
var ITEM2 = "#Item2";
var ITEM3 = "#item3";

var myEase = Power1.easeInOut; // useful to declare easing types as a variable

// Create a looping timeline

var tl = new TimelineMax({repeat:-1});

// Add animations to the timeline

tl
  .set(ITEM1, {xPercentage:50}) // .set puts an object in that state without any animation
  .set([ITEM1, ITEM2], {opacity:0}) // Multiple objects can be passed as an array

  .to(ITEM3, 4, {opacity:0.5, ease:myEase}, 0) // adjust object relative to current value

  .from(ITEM2, 1, {xPercent:-100})  // Animating by percentages for responsive animation
  .to(ITEM2, 1, {xPercent:100});

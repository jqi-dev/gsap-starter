var controller = new ScrollMagic.Controller();

// Timeline
TweenMax.set(["#circle"], {scale:1})
 
// Scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
    .setTween(["#circle"], 1, {scale:2})
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  
  
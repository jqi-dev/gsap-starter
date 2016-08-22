var tl = new TimelineMax({paused:true});
tl.to("#circle", 2, {scale:2});

$('.play').on('click', function(event) {
    tl.play();
});

$('.reset').on('click', function(event) {
    tl.time(0)
    .paused(true)
});
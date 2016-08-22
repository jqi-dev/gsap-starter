var tl = new TimelineMax({paused:true});
tl.to("#circle", 1, {scale:2});

$('#scale').on('input', function(event) {
  console.log(this.value)
  tl.progress(this.value);
});
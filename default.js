$(function() {
  var container = $(".container");
  var r = container.width()/2;
  var numEl = $(".container li").length;
  var oneDeg = Math.PI/180;
  var interval = 360*oneDeg/numEl;
  var _startingDeg = 0*oneDeg;

  var placeObjectsAccordingTo = function(startingDeg) {
    $("ul").children().each(function(i, el) {
      var deg = interval*i + startingDeg;
      var x = Math.floor(r*(Math.cos(deg)));
      var y = Math.floor(r*(Math.sin(deg) + 1));
      $(el).css("transform", "translate3d(" + x + "px, " + y + "px, 1px)" );
    });
  };

  placeObjectsAccordingTo(_startingDeg);

  var timeFor1Interval = 200; //ms
  var timeLimit = numEl*timeFor1Interval;
  var callbackDelay = timeFor1Interval/50; //ms
  var timeCallback = function() {
    _startingDeg -= interval/(timeFor1Interval/callbackDelay);
    timeLimit -= callbackDelay;
    if (timeLimit > 0){
      placeObjectsAccordingTo(_startingDeg);
      setTimeout(timeCallback, callbackDelay);
    }
  }
  timeCallback();

  $("ul li").each(function() {

  });
});

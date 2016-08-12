$(function() {
  var container = $(".container");
  var r = container.width()/2;
  var numEl = $(".container li").length;
  var oneDeg = Math.PI/360;
  var interval = 360*2*oneDeg/numEl;
  var _startingDeg = 0*oneDeg;

  var placeObjectsAccordingTo = function(startingDeg) {
    $("ul").children().each(function(i, el) {
      var deg = interval*i + startingDeg;
      $(el).css("top", r*(Math.sin(deg) + 1));
      $(el).css("left", r*(Math.cos(deg) + 1));
    });
  };

  placeObjectsAccordingTo(_startingDeg);

  var timeFor1Interval = 100; //ms
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

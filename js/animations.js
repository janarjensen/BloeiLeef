// ----------header circle buttons
$("#circle1").on("click", function(){
  $(this).addClass("selected");
  $("#headerSection").removeClass().addClass("header1");
  $("#kickerText").text("Verwen je Blij!")
})
$("#circle2").on("click", function(){
  $(this).addClass("selected");
  $("#headerSection").removeClass().addClass("header2");
  $("#kickerText").text("Herontdekken wie je werkelijk bent")
})
$("#circle3").on("click", function(){
  $(this).addClass("selected");
  $("#headerSection").removeClass().addClass("header3");
  $("#kickerText").text("Niet lekker in je vel? Niet op gewicht? Vage klachten?")
})
// ----------set equal heights to all divs in row
$(function() {
    $('.cardBorder').matchHeight();
});
$(function() {
    $('.receptCard').matchHeight();
});
// ----------set nr of persons for recipe
var nrOfPStart = 4
// change number of people in h2
$("input[type='range']").on("input change", function(event){
  $(".personen").text($("input[type='range']").val());
  });
// change volumes in ul
$("input[type='range']").on("change", function(event){
  // grab value from range input
  var nrOfP = $(this).val();
  // multiply input with volumes
  $(".volume").each(function(){
    var newVolume = ($(this).text() / nrOfPStart * nrOfP);
    $(this).text(newVolume);
  });
  // update totle nr of persones
  $("#personen").text(nrOfP);
  // update nrOfPStart
  nrOfPStart = nrOfP;
});

// ----------check off specific ingredient by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

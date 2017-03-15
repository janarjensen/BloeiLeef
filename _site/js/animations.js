// toggle class of statNav
$(".statNavLogo").click(function(){
  $("#statNav").toggleClass("clicked unClicked");
});

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

// ----------set equal heights to all cards in Home
$(function() {
    $('.cardBorder').matchHeight();
});

// -----------random diplay recept in news card 1
var randomReceptNr = Math.floor(Math.random() * $(".newsRecept").length)
var ImgUrl = $(".newsRecept > p").eq(randomReceptNr).text();
$(".newsRecept").eq(randomReceptNr).toggleClass("display displayNot");
$("#receptImg").css("background-image", "url("+ ImgUrl +")");

// -----------random diplay weetje in news card 3
var randomWeetjeNr = Math.floor(Math.random() * $(".newsWeetje").length)
var ImgUrl = $(".newsWeetje > p").eq(randomWeetjeNr).text();
$(".newsWeetje").eq(randomWeetjeNr).toggleClass("display displayNot");
$("#weetjeImg").css("background-image", "url("+ ImgUrl +")");

// -----------random diplay blog in news card 2
var randomBlogNr = Math.floor(Math.random() * $(".newsBlog").length)
var ImgUrl = $(".newsBlog > p").eq(randomBlogNr).text();
$(".newsBlog").eq(randomBlogNr).toggleClass("display displayNot");
$("#blogImg").css("background-image", "url("+ ImgUrl +")");

// ----------set equal heights to all news in home (after news random display)
$(function() {
    $('.receptCard').matchHeight();
});

// toggle class of searchIcon
$("#searchIcon").click(function(){
  $(".receptenNav").toggleClass("height0 heightAuto");
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
  $("b").each(function(){
    var newVolume = ($(this).text() / nrOfPStart * nrOfP);
    $(this).text(Math.round(newVolume*10)/10);
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

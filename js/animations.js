// toggle class of statNav
$(".statNavLogo").click(function(){
  $("#statNav").toggleClass("clicked unClicked");
});
// toggle class of statNav
$("#meer").click(function(){
  $("#meerSpan").toggleClass("displayInLine displayNone");
  if ($(this).text() == "meer")
  {
     $(this).text("minder");
  }
  else
  {
     $(this).text("meer");
  };
});

// ----------header circle buttons
$("#circle1").on("click", function(){
  $(this).addClass("selected");
  $("#headerSection").removeClass().addClass("header1");
  $("#kickerText").html("<a id='kickerText' href='bloei-en-leef'><h1>Verwen je Blij!</h1></a>");
})
$("#circle2").on("click", function(){
  $(this).addClass("selected");
  $("#headerSection").removeClass().addClass("header2");
  $("#kickerText").html("<a id='kickerText' href='coaching'><h1>Herontdekken wie je werkelijk bent</h1></a>");
})
$("#circle3").on("click", function(){
  $(this).addClass("selected");
  $("#headerSection").removeClass().addClass("header3");
  $("#kickerText").html("<a id='kickerText' href='hormoon-balans-weekend'><h1>Niet lekker in je vel? Niet op gewicht? Vage klachten?</h1></a>");
})

// ----------set equal heights to all cards in Home
$(function() {
    $('.newsCard').matchHeight();
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
  $(".contentNav").toggleClass("height0 heightAuto");
});

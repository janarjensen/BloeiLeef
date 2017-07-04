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

// Swipe events creator
function swipedetect(el, callback){

    var touchsurface = el,
    swipedir,
    startX,
    // startY,
    distX,
    // distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}

    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startTime = new Date().getTime() // record time when finger first makes contact with surface
    }, false)


    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold ){ //2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
        }
        handleswipe(swipedir)
    }, false)
}

//USAGE:

var el = document.getElementById('receptSection')
swipedetect(el, function(swipedir){
    //  swipedir contains either "none", "left", "right",
    if (swipedir =='left')
        location.href = $('.previous').attr('href');
    if (swipedir =='right')
        location.href = $('.previous').attr('href');
})

// console.log($('.previous').attr('href'));

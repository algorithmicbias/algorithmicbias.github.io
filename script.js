$(document).ready(function(){
  // Activate the carousel
  $("#myCarousel").carousel({
    // Turn off automatic sliding
    interval: false,
    wrap: false
  });

  // Flag variable to prevent multiple mousewheel events
  var sliding = false;

  // Draw separator line on slide trigger
  $('#myCarousel').on('slid.bs.carousel', function () {
    // Get the active slide index
    var activeSlideIndex = $(this).find('.active').index();
    
    // Find the line for the active slide and add the "line-draw" class to trigger the animation
    $(this).find('.carousel-item').eq(activeSlideIndex).find('.line').addClass('line-draw');
    
    // Remove the "line-draw" class from the other lines to reset their width
    $(this).find('.line').not('.line-draw').removeClass('line-draw').css('width', '0');
  });

  // Detect mouse scrolling and trigger carousel sliding
  $(window).bind('mousewheel', function(event) {
    if (!sliding) {
      sliding = true;
      if (event.originalEvent.wheelDelta >= 0) {
        $("#myCarousel").carousel("prev");
      }
      else {
        var currentSlide = $('.carousel-item.active');
        var hiddenText = currentSlide.find('.hidden-text');
        var hiddenText2 = currentSlide.find('.hidden-text-2');
        var hiddenText3 = currentSlide.find('.hidden-text-3');
        var hiddenText4 = currentSlide.find('.hidden-text-4');
        var hiddenText5 = currentSlide.find('.hidden-text-5');
        if (hiddenText.length > 0 && !hiddenText.is(':visible')) {
          $('.carousel-item.active').find('.hidden-text').slideDown('slow');
        } else if (hiddenText2.length > 0 && !hiddenText2.is(':visible')){
          $('.carousel-item.active').find('.hidden-text-2').slideDown('slow');
        } else if (hiddenText3.length > 0 && !hiddenText3.is(':visible')){
          $('.carousel-item.active').find('.hidden-text-3').slideDown('slow');
        } else if (hiddenText4.length > 0 && !hiddenText4.is(':visible')){
          $('.carousel-item.active').find('.hidden-text-4').slideDown('slow');
        } else if (hiddenText5.length > 0 && !hiddenText5.is(':visible')){
          $('.carousel-item.active').find('.hidden-text-5').slideDown('slow');
        } else {
          $("#myCarousel").carousel("next");
        }
      }
      setTimeout(function(){
        sliding = false;
      }, 2000); // Delay to prevent multiple events within 2000ms
    }
  });

  $(document).on('click', function(event) {
    if (!sliding) {
      sliding = true;
      var currentSlide = $('.carousel-item.active');
      var hiddenText = currentSlide.find('.hidden-text');
      var hiddenText2 = currentSlide.find('.hidden-text-2');
      var hiddenText3 = currentSlide.find('.hidden-text-3');
      var hiddenText4 = currentSlide.find('.hidden-text-4');
      var hiddenText5 = currentSlide.find('.hidden-text-5');
      if (hiddenText.length > 0 && !hiddenText.is(':visible')) {
        $('.carousel-item.active').find('.hidden-text').slideDown('slow');
      } else if (hiddenText2.length > 0 && !hiddenText2.is(':visible')){
        $('.carousel-item.active').find('.hidden-text-2').slideDown('slow');
      } else if (hiddenText3.length > 0 && !hiddenText3.is(':visible')){
        $('.carousel-item.active').find('.hidden-text-3').slideDown('slow');
      } else if (hiddenText4.length > 0 && !hiddenText4.is(':visible')){
        $('.carousel-item.active').find('.hidden-text-4').slideDown('slow');
      } else if (hiddenText5.length > 0 && !hiddenText5.is(':visible')){
        $('.carousel-item.active').find('.hidden-text-5').slideDown('slow');
      } else {
        $("#myCarousel").carousel("next");
      }
      //$("#myCarousel").carousel("next");
      setTimeout(function(){
        sliding = false;
      }, 500); // Delay to prevent multiple events within 500ms
    }
  });



  $(document).on('keydown', function(event) {
    if (event.keyCode == 40 || event.keyCode == 39 || event.keyCode == 32) { // down or right arrow key
      if (!sliding) {
        sliding = true;
        var currentSlide = $('.carousel-item.active');
        var hiddenText = currentSlide.find('.hidden-text');
        var hiddenText2 = currentSlide.find('.hidden-text-2');
        var hiddenText3 = currentSlide.find('.hidden-text-3');
        var hiddenText4 = currentSlide.find('.hidden-text-4');
        var hiddenText5 = currentSlide.find('.hidden-text-5');
        if (hiddenText.length > 0 && !hiddenText.is(':visible')) {
          $('.carousel-item.active').find('.hidden-text').slideDown('slow');
        } else if (hiddenText2.length > 0 && !hiddenText2.is(':visible')){
          $('.carousel-item.active').find('.hidden-text-2').slideDown('slow');
        } else if (hiddenText3.length > 0 && !hiddenText3.is(':visible')){
          $('.carousel-item.active').find('.hidden-text-3').slideDown('slow');
        } else if (hiddenText4.length > 0 && !hiddenText4.is(':visible')){
          $('.carousel-item.active').find('.hidden-text-4').slideDown('slow');
        } else if (hiddenText5.length > 0 && !hiddenText5.is(':visible')){
          $('.carousel-item.active').find('.hidden-text-5').slideDown('slow');
        } else {
          $("#myCarousel").carousel("next");
        }
        //$("#myCarousel").carousel("next");
        setTimeout(function(){
          sliding = false;
        }, 500); // Delay to prevent multiple events within 500ms
      }

    }
    else if (event.keyCode == 38 || event.keyCode == 37) { // up or left arrow key
      if (!sliding) {
        sliding = true;
        $("#myCarousel").carousel("prev");
        setTimeout(function(){
          sliding = false;
        }, 500); // Delay to prevent multiple events within 500ms
      }
    } else if (event.keyCode == 48) {
      // "0" key as shortcut to end of carousel
      event.preventDefault(); 
      var carousel = $('#myCarousel');
      var numSlides = $('.carousel-item', carousel).length;
      carousel.carousel(numSlides -1);
    } else if (event.keyCode == 49) {
      // "1" key to jump to first slide
      event.preventDefault(); 
      var carousel = $('#myCarousel');
      carousel.carousel(0);
    }

  });

  // Set up touch event listeners
  myCarousel.addEventListener('touchstart', handleTouchStart, false);
  myCarousel.addEventListener('touchmove', handleTouchMove, false);

  // Variables to track touch position
  var xDown = null;
  var yDown = null;

  function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  }

  function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    // Check for vertical swipe
    if ( Math.abs( xDiff ) < Math.abs( yDiff ) ) {
      if ( yDiff > 0 ) {
        // Swipe up, go to next slide
        if (!sliding) {
          sliding = true;
          var currentSlide = $('.carousel-item.active');
          var hiddenText = currentSlide.find('.hidden-text');
          var hiddenText2 = currentSlide.find('.hidden-text-2');
          var hiddenText3 = currentSlide.find('.hidden-text-3');
          var hiddenText4 = currentSlide.find('.hidden-text-4');
          var hiddenText5 = currentSlide.find('.hidden-text-5');
          if (hiddenText.length > 0 && !hiddenText.is(':visible')) {
            $('.carousel-item.active').find('.hidden-text').slideDown('slow');
          } else if (hiddenText2.length > 0 && !hiddenText2.is(':visible')){
            $('.carousel-item.active').find('.hidden-text-2').slideDown('slow');
          } else if (hiddenText3.length > 0 && !hiddenText3.is(':visible')){
            $('.carousel-item.active').find('.hidden-text-3').slideDown('slow');
          } else if (hiddenText4.length > 0 && !hiddenText4.is(':visible')){
            $('.carousel-item.active').find('.hidden-text-4').slideDown('slow');
          } else if (hiddenText5.length > 0 && !hiddenText5.is(':visible')){
            $('.carousel-item.active').find('.hidden-text-5').slideDown('slow');
          } else {
            $("#myCarousel").carousel("next");
          }
          //$("#myCarousel").carousel("next");
          setTimeout(function(){
            sliding = false;
          }, 500); // Delay to prevent multiple events within 500ms
      }
    }
      } else {
        // Swipe down, go to previous slide
        if (!sliding) {
          sliding = true;
          $("#myCarousel").carousel("prev");
          setTimeout(function(){
            sliding = false;
          }, 500); // Delay to prevent multiple events within 500ms
        }
      }
    }

    // Reset touch position variables
    xDown = null;
    yDown = null;

  // Enable the indicators
  $(".carousel-indicators li").on("click", function(){
    $("#myCarousel").carousel(parseInt($(this).attr("data-slide-to")));
  });



});


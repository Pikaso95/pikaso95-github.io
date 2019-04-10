// Preloader
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(500).fadeOut();
});

// banner transition
$(window).on('load', function(){
  $('.banner_heading').addClass("animated fadeIn");
  $('.banner_para').addClass("animated fadeIn");
  $('.banner_btn').addClass("animated fadeIn");
})


//Initialize wow js
new WOW().init();


// Image Filtering
$(window).on('load', function () {
  // intn isotope
 $("#isotope-container").isotope({
 });

    // filter items on button click
   $("#isotope-filters").on('click', 'button', function() {
       // get filter value
       var filterValue = $(this).attr('data-filter');

       // filter portfolio
       $("#isotope-container").isotope({
         filter: filterValue
     });

     // add active class to filter btn
     $("#isotope-filters").find('.active').removeClass('active');
     $(this).addClass('active');
   });
});


// Flex Slider
$(document).ready(function() {
    $('.slider_l').flexslider({
      animation: "fade",
      controlNav: false,
      directionNav: false,
      touch:true,
      slideshowSpeed: 4000,
      animationSpeed: 800,   
      keyboard: true,
      isFirefox:true,
    });


// OWl carousel   
$('.owl-carousel').owlCarousel({
      items:1,
      loop:true,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    });
  });


// scroll to top
$(document).ready(function(){
  $(this).scrollTop(0);
});
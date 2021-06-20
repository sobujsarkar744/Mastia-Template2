$(document).ready(function(){

    //Slider Start Here
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        dots:false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        transitionStyle: "fade",
        animateOut: 'animate__lightSpeedOutRight',
        animateIn: 'animate__lightSpeedOutLeft',
        smartSpeed:450
    });

    //Counter Up Plugin
    $('.count-item').counterUp({
        time: 1000,
    });

    // PopuP
    $('.popup-item').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
      });

      //Slick Start Here
      $('.slick-slider').slick({
        slickArrow:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:'<button type="button" class="arrow-next"><i class="fas fa-chevron-right"></i></button>',
        prevArrow:'<button type="button" class="arrow-prev"><i class="fas fa-chevron-left"></i></button>'
      });


      //Slick Start Here
      $('.slider').slick({
        slickArrow:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:'<button type="button" class="arrow-next1"><i class="fas fa-chevron-right"></i></button>',
        prevArrow:'<button type="button" class="arrow-prev1"><i class="fas fa-chevron-left"></i></button>'
      });


   



});
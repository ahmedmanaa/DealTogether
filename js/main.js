//loader
$(function() {
  $('.loader-container').fadeOut();
})

// sidebar menu toggle
$(document).on('click', '#sidebar_toggler', function() {
  $('.sidebar-wrapper').addClass('sidebar-show');
  $('body').addClass('overBody__hidden');
   $('.mob-overlay').addClass('active');
});

$(document).on('click', '#burgerBtn', function() {
  $('.sidebar-wrapper').removeClass('sidebar-show');
  $('body').removeClass('overBody__hidden');
  $('.mob-overlay').removeClass('active');
});

$(document).on('click', '.mob-overlay', function() {
  $('.sidebar-wrapper').removeClass('sidebar-show');
  $('body').removeClass('overBody__hidden');
  $('.mob-overlay').removeClass('active');
});

// scroll top button
$(function () {

  var scrollButton = $('.go-top');

  $(window).scroll(function () {

    if($(window).scrollTop() >= 500) {
      scrollButton.show();
    }else {
      scrollButton.hide();
    }
  });

  scrollButton.click(function () {
    $('html, body').animate({scrollTop: 0});
  })
});

// faqs
$(document).on('click', '.faqs__title', function() {
  $(this).parent('.faqs__card').toggleClass('active_faq');
  $(this).parent('.faqs__card').siblings('.faqs__card').removeClass('active_faq');
  $(this).find('.plus__icon i').toggleClass('fa-chevron-up fa-chevron-down');
  $(this).parent('.faqs__card').siblings('.faqs__card').find('.plus__icon i').addClass('fa-chevron-down').removeClass('fa-chevron-up');
});

// category nice select
$(document).ready(function() {
  $('select.nice-select').niceSelect();
});

// categories slider
$(function(){
  
  var is_rtl = $("html[lang='ar']").length > 0;
    
  $('.categories__Slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: is_rtl,
    dots: false,
    arrows: true,
    loop: true,
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 3000,
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-left"></i></button>',
  	prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-right"></i></button>',
    responsive: [{

      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }

    }, {

      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        arrows: false,
        centerMode: true,
      }

    }, {

      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
      }

    }
  ]
  });
});


// categories slider
$(function(){
  
  var is_rtl = $("html[lang='ar']").length > 0;
    
  $('.deals__Slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: is_rtl,
    dots: false,
    arrows: true,
    loop: true,
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 5000,
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-left"></i></button>',
  	prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-right"></i></button>',
    responsive: [{

      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }

    }, {

      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        arrows: false,
        centerMode: true,
      }

    }, {

      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
      }

    }
  ]
  });
});

// copy link
$(document).on('click', '.copyBTN_link', function() {
  $(this).removeClass('green_class1');
  $(this).find('.hidden_text').show();
  $(this).find('.show_text').hide();
});
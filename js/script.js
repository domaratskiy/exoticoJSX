jQuery(function($) {
    "use strict"

    // header nav
    if($('.burger').length){
      $('.burger').click(function(event){
        $('.burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');	
      });
    }
    
    if($('header .headerTop nav > ul > li  a').length){   
      $('header .headerTop nav > ul > li  a ').click(function(event){
        $('.burger, .menu').removeClass('animate__backOutRight').removeClass('active');
        $('body').removeClass('lock');
      });
    }

    // slider in header
    if($('.home_slider').length){

            $('.home_slider').slick({
            vertical:true,
            arrows: false,
            dots: true,
            rows: 0,
            adaptiveHeight:true,
            autoplay: true,
            autoplaySpeed: 4000,
        });

    }

    // section shopSlider
    if($('.shopSlider__box').length){
        $('.shopSlider__box').slick({
            infinite: true,
            rows: 0,
            slidesToShow: 4,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 1000,
            appendArrows:$('.slider_controls'),
            prevArrow:"<div class=\"slider_controls__left\"><i class=\"fa-solid fa-arrow-left\"></i></div>",
            nextArrow:"<div class=\"slider_controls__right\"><i class=\"fa-solid fa-arrow-right\"></i></div>", 
            responsive: [

                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    
                  }
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }

    // section blog
    if($('.testemonial_carusel').length){
        $('.testemonial_carusel').slick({
            infinite: true,
            rows: 0,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 1000,
            appendArrows:$('.testemonial_slider'),
            prevArrow:"<div class=\"testemonial_left\"><div class=\"left\"><i class=\"fa-solid fa-arrow-left\"></i></div></div>",
            nextArrow:"<div class=\"testemonial_right\"><div class=\"right\"><i class=\"fa-solid fa-arrow-right\"></i></div></div>", 
            responsive: [
              {
                breakpoint: 980,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        });

        $('.testemonial_carusel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            let tabs_cont = $('.testemonial_cont');
            tabs_cont.find($('.testemonialTab')).hide();
            tabs_cont.find($('.tab-' + nextSlide)).show();
        });
    }

    // section magnificPopup
    if($('.video_info__icon').length){
      $('.video_info__icon').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      });
    }

    // SLOW SKROLL
    if($('.menu').length){
      let header = document.querySelector('.headerTop').offsetHeight;

      $(".menu").on("click","a", function (event) {

        event.preventDefault();

        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - header + 1}, 1500);
      });
    }

    // toggleClass when click link
    if($('.sap_menu__cont').length){
      $(".sap_menu__cont").click(function(){
        $(".sap_menu").toggleClass('menu_active');
      });
    }



    //  identifier from which device you entered the site
    const isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows());
      }
    }


    if(isMobile.any()) {
      document.body.classList.add('_touch');
    }else{
      document.body.classList.add('pc');
    }

    // lazy loadibg img in site
    // let images = document.querySelectorAll('img[data]');

    // let options = {
    //   root: null,
    //   rootMargin: '0px',
    //   threshold : 0.1
    // }

    // function heandleImg( myImg,observer){
    //   myImg.forEach(myImgSingle => {
    //     console.log(myImgSingle.intersectionRatio);
    //     if(myImgSingle.intersectionRatio > 0){
    //       loadImage(myImgSingle.target);
    //     }
    //   });
    // }

    // function loadImage(image){
    //   image.src = image.getAttribute('data');
    // }
    // let observer =  new IntersectionObserver(heandleImg, options);

    // images.forEach(img => {
    //   observer.observe(img);
    // });

    new WOW().init();
  
});



(function($) {
    "use strict";

    // Preloader
    $(window).on('load', function() {
        $('#preloader').delay(350).fadeOut('slow');
    });

    // // Lazy load
    // $("img").unveil();

    // Slick RTL Support
    function rtl_slick() {
        if ($('body').hasClass("rtl")) {
            return true;
        } else {
            return false;
        }
    }

    // Megamenu
    $('.dropdown-mega-menu-toggle').closest('.menu-item').addClass('menu-item-has-children');


    // magnificPopup ajax view
    $('.ajax-quick-view-popup').magnificPopup({
        type: 'ajax',
        alignTop: true,
        overflowY: 'scroll'
    });

    // Slideshow Gallery
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        fade: true,
        dots: false,
        asNavFor: '.slider-nav',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        asNavFor: '.slider-for',
        arrows: false,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.slider-for-vertical').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: false,
        asNavFor: '.slider-nav-vertical',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>'
    });
    $('.slider-nav-vertical').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.slider-for-vertical',
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        focusOnSelect: true
    });

    // Popup video
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Widget categories 2
    $('.widget-categories.style-2, .posts-carousel-layout-7').slick({
        arrows: true,
        infinite: true,
        speed: 1000,
        rtl: rtl_slick(),
        "slidesToShow": 6,
        "slidesToScroll": 6,
        "responsive": [{
                "breakpoint": 1200,
                "settings": {
                    "slidesToShow": 3,
                    "slidesToScroll": 3
                }
            },
            {
                "breakpoint": 1024,
                "settings": {
                    "slidesToShow": 2,
                    "slidesToScroll": 2
                }
            },
            {
                "breakpoint": 600,
                "settings": {
                    "slidesToShow": 1,
                    "slidesToScroll": 1
                }
            }
        ],
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>'
    });

    // Post layout 8
    $('.posts-carousel-layout-8').slick({
        arrows: true,
        autoplay: true,
        draggable: true,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        rtl: rtl_slick(),
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "responsive": [{
                "breakpoint": 1200,
                "settings": {
                    "slidesToShow": 3,
                    "slidesToScroll": 3
                }
            },
            {
                "breakpoint": 1024,
                "settings": {
                    "slidesToShow": 2,
                    "slidesToScroll": 2
                }
            },
            {
                "breakpoint": 600,
                "settings": {
                    "slidesToShow": 1,
                    "slidesToScroll": 1
                }
            }
        ],
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>'
    });

    // product items tab
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $('.product-items').slick('setPosition');
    });

    // AJAX Search
    $(document).mouseup(function(e) {

        var searchresuls = $(".sidebar-search");

        // if the target of the click isn't the container nor a descendant of the container
        if (!searchresuls.is(e.target) && searchresuls.has(e.target).length === 0) {
            $("#datafetch").hide();
        }
    });


    // Header search
    $(function() {
        $('.header-search a').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            const dropdown = $(this).closest('.header-search');

            if (dropdown.is('.open')) {
                dropdown.removeClass('open');
            } else {
                dropdown.addClass('open');
            }
        });

        $(document).on('click', function(event) {
            $('.header-search')
                .not($(event.target).closest('.header-search'))
                .removeClass('open');
        });
    });

    //Mobile Nav Hide Show
    if ($('.off-canvas-menu').length) {

        var mobileMenuContent = $('.desktop-menu>ul').html();
        $('.off-canvas-menu .navigation').append(mobileMenuContent);

        //Menu Toggle Btn
        $('.mobile-nav-toggler, .menu-toggle').on('click', function(event) {
            event.preventDefault();
            $('body').addClass('off-canvas-menu-visible');
        });

        //Menu Toggle Btn
        $('.off-canvas-menu .menu-backdrop,.off-canvas-menu .close-btn').on('click', function() {
            $('body').removeClass('off-canvas-menu-visible');
        });
    }

    $('.off-canvas-menu li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
    $('.off-canvas-menu li.menu-item-has-children .dropdown-btn').on('click', function() {
        $(this).prev('ul').slideToggle(500);
    });

    // WooCommerce Variations as Radio Buttons
    $(document).on('change', '.variation-radios input', function() {
        $('select[name="' + $(this).attr('name') + '"]').val($(this).val()).trigger('change');
    });

    //Accordion
    $('.akhbar-accordion-item:first-child').addClass('active');
    $('.akhbar-accordion-item:first-child .collapse').addClass('show');
    $('.collapse').on('shown.bs.collapse', function() {
        $(this).parent().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function() {
        $(this).parent().removeClass('active');
    });

    // Wishlist share icon update
    $('.yith-wcwl-share .share-button i.fa').addClass('fab').removeClass('fa');
    $('.single-product .yith-wcwl-icon.fa-heart-o').addClass('fa-heart').removeClass('fa-heart-o');


    //Back to top
    // $(window).on('scroll', function() {
    //     if ($(this).scrollTop() >= 700) {
    //         $('#backtotop').fadeIn(500);
    //     } else {
    //         $('#backtotop').fadeOut(500);
    //     }
    // });

    // $('#backtotop').on('click', function() {
    //     $('body,html').animate({
    //         scrollTop: 0
    //     }, 500);
    // });

})(jQuery);
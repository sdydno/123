$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
        scrollPrev = 0;


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        debugger
        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop:  blockOffset - 150
        }, 500);
    });


    /* Slider reviews */
    $("[data-slider]").slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    /* Slider header */
    $('.dota__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear'
    });

    // Slider info
    $('.info__inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });

     // Slider team
     $('.team__inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });


    /* Scroll header */
    var header = $('.header'),
		scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();

        if ( scrolled > 100 && scrolled > scrollPrev ) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });

    // Modal
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);
    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            
        }, 200);
    });

});


$(function () {

    //..banner js start..//

    $('.banner-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: ".b-left",
        nextArrow: ".b-right",
    });
    $(".typed").typed({
        strings: ["Developers.", "Designers.", "People."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: Infinity,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });

    //..banner js end..//

    //..portfolio js start..//

    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'flow',
    });

    new VenoBox({
        selector: '.my-video-links',
    });

    //..portfolio js end..//

    //..service js start..//

    $('.service-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: true,
        vertical: true,
        prevArrow: ".top-service-btn",
        nextArrow: ".btm-service-btn",
    });

    //..service js end..//

    //..feedback js start..//

    $('.person-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        centerMode: true,
        centerPadding: '0px',
        pauseOnHover: false,
        pauseOnFocus: false,
        asNavFor: '.comment-wrapper',
        arrows: true,
        prevArrow: ".feedback-top-btn",
        nextArrow: ".feedback-btm-btn",
    });
    $('.comment-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        fade: false,
        arrows: false,
        asNavFor: '.person-wrapper',
    });

    //..feedback js end..//

    //..counter js strat..//

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //..counter js end..//

    //..brand js strat..//

    $('.brand-wrapper').slick({
        slidesToShow: 5,
        slidesToScroll: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    //..brand js end..//

})
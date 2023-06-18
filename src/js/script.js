$(document).ready(function(){
    $('.carousel__inner').slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        speed: 1500,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    autoplay: false,
                    speed: 1000
                }
            }
        ]
    });
});
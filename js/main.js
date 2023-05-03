$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__menu, .header__burger').toggleClass('active');
    });
});
$(document).ready(function(){
    $('.course__item').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 799,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.comments__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
    });
});


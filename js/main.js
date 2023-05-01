$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__menu, .header__burger').toggleClass('active');
    });
});
$(document).ready(function(){
    $('.slider__item').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
});

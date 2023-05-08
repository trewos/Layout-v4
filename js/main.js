/* Burger-menu click */
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__menu, .header__burger').toggleClass('active');
    });
});

/* Course slider */
$(document).ready(function () {
    $('.course__item').slick({
        dots: $('.course__item > div').length > 3,
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

/* Comments slider */

$(document).ready(function () {
    $('.comments__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 6000,
    });
});

/* Mentors slider */

$(document).ready(function () {
    $('.mentors__item').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
    });
});

/* Checking for field completeness and input correctness */

const RegisterName = document.getElementById('register__name');
const RegisterLastname = document.getElementById('register__lastname');
const RegisterChoise = document.getElementById('register__choise');
const RegisterPhone = document.getElementById('register__phone');
const RegisterEmail = document.getElementById('register__email');
const RegisterCheckBox = document.getElementById('register__checkbox')

function validateRegisterName() {
    const regex = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]/;
    if (!regex.test(RegisterName.value.trim())) {
        RegisterName.style.border = '1px solid red';
        RegisterName.style.boxShadow = 'inset 0 0 5px red';
        return false;
    } else {
        RegisterName.style.border = '';
        RegisterName.style.boxShadow = '';
        return true;
    }
}

function validateRegisterLastname() {
    const regex = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]/;
    if (!regex.test(RegisterLastname.value.trim())) {
        RegisterLastname.style.border = '1px solid red';
        RegisterLastname.style.boxShadow = 'inset 0 0 5px red';
        return false;
    } else {
        RegisterLastname.style.border = '';
        RegisterLastname.style.boxShadow = '';
        return true;
    }
}

function validateRegisterChoise() {
    const regex = /^(developer|QA)$/;
    if (!regex.test(RegisterChoise.value.trim())) {
        RegisterChoise.style.border = '1px solid red';
        RegisterChoise.style.boxShadow = 'inset 0 0 5px red';
        return false;
    } else {
        RegisterChoise.style.border = '';
        RegisterChoise.style.boxShadow = '';
        return true;
    }
}

function validateRegisterPhone() {
    const regex = /\+38\s\d{3}\s\d{2}\s\d{2}\s\d{3}/;
    if (!regex.test(RegisterPhone.value.trim())) {
        RegisterPhone.style.border = '1px solid red';
        RegisterPhone.style.boxShadow = 'inset 0 0 5px red';
        return false;
    } else {
        RegisterPhone.style.border = '';
        RegisterPhone.style.boxShadow = '';
        return true;
    }
}

function validateRegisterEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(RegisterEmail.value.trim())) {
        RegisterEmail.style.border = '1px solid red';
        RegisterEmail.style.boxShadow = 'inset 0 0 5px red';
        return false;
    } else {
        RegisterEmail.style.border = '';
        RegisterEmail.style.boxShadow = '';
        return true;
    }
}

function validateRegisterCheckBox() {
    if (RegisterCheckBox.checked) {
        return true;
    } else {
        return false;
    }
}

function validateForm() {
    const validName = validateRegisterName();
    const validLastname = validateRegisterLastname();
    const validEmail = validateRegisterEmail();
    const validPhone = validateRegisterPhone();
    const validChoise = validateRegisterChoise();
    const validCheckBox = validateRegisterCheckBox()

    return validName && validLastname && validChoise && validPhone && validEmail && validCheckBox;
}

document.querySelector('#register__submit').addEventListener('click', function (event) {
    if (!validateForm()) {
    }
});

/* Link header click */

function smoothScroll(event, target) {
    event.preventDefault();
    const element = document.getElementById(target);
    const offsetTop = element.offsetTop;
    const offsetHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;
    const distance = offsetTop - ((windowHeight - offsetHeight) / 2);
    window.scroll({
        top: distance,
        left: 0,
        behavior: 'smooth'
    });
}
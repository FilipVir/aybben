var toggleBtn = document.querySelector('.navbar-toggle');
var navbarClose = document.querySelector('.navbar-close');
var navigation = document.querySelector('.navigation');
toggleBtn.addEventListener('click', function () {
    navigation.classList.toggle('active')
    document.body.style.overflow='hidden'
})

navbarClose.addEventListener('click', function () {
    navigation.classList.remove('active');
    document.body.style.overflow='unset'
})

if (document.querySelector('.slider')) {
    $('.slider').owlCarousel({
        margin: 24,
        navText: ['<img src=\'./assets/images/slider-arrows/left-arrow.svg\' class=\'nav-button owl-prev\'/>', '<img src=\'./assets/images/slider-arrows/right-arrow.svg\' class=\'nav-button owl-next\'/>'],
        loop: true,
        autoPlay: true,
        nav: true,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1.5
            },
            567: {
                items: 2.5
            },
            900: {
                items: 3.5
            }
        }
    })
}

$(document).ready(function () {
    $('.nav-link').click(function () {
        $('.tab-pane').removeClass('show');
        var id = $(this).attr('data-id')
        console.log($(this).attr('data-id'))
        console.log('.tab-pane[data-id=\'' + id + '\']')
        $('.tab-pane[data-id=\'' + id + '\']').addClass('show');
        $('.nav-link').removeClass('active');
        $(this).parent().find('.nav-link').addClass('active');
    });
});
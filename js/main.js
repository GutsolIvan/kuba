$(function () {
    $('.photo__slaider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/Shapestrelka-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/Shapestrelka-right.svg" alt="" class=""></button>'
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });
});
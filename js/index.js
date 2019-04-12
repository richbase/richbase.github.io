$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('.header').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 40) {
            $('.navbar').addClass('solid-nav');
        } else {
            $('.navbar').removeClass('solid-nav');
        }

    });
});
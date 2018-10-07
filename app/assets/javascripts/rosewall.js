$(document).ready(function () {
    $('.phone-call-to-action').on('mouseover', function () {
        $('.icon-img').addClass("icon-img-hover");
    })
    $('.phone-call-to-action').on('mouseout', function () {
        $('.icon-img').removeClass("icon-img-hover");
    })
})
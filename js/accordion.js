$(function () {
    $('.accordion').on('click', function () {
        if ($(this).find('.accord-body').hasClass('toggle-body')) $(this).find('.accord-body').removeClass('toggle-body');
        else $(this).find('.accord-body').addClass('toggle-body');
    });
});

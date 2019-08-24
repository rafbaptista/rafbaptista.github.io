$(function(){
    $('.arrow').click(function(){
        var offsetTopArrow = $(this).offset().top;
        $('body, html').stop().animate({'scrollTop': offsetTopArrow+62},1500);
    })
})
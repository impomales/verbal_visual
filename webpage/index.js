$(document).ready(function() {
    var bottom_menu_location = $('.menu-bar').offset().top;
    $('#arrow-button').click(function(e) {
        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 600);
    });
    
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() >= bottom_menu_location) {
            $('.menu-bar').addClass('fixed');
        } else {
            $('.menu-bar').removeClass('fixed');
        }
    });
    
});
$("#games-nav ul li a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top - 80
    }, 300, function(){

        // when done, add hash to url
        // (default click behaviour)
        var scroll = $(window).scrollTop();
        window.location.hash = hash;
        $(window).scrollTop(scroll);
    });

});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
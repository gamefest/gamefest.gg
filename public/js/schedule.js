new WOW().init();
$(".view .mask").removeClass("waves-effect waves-light");

jarallax(document.querySelectorAll('.jarallax'), {
    disableParallax: /iPad|iPhone|iPod|Android/,
    disableVideo: /iPad|iPhone|iPod|Android/
});
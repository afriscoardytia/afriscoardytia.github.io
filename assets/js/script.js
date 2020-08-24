$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    if (wScroll > 100) {
        $('.logo').css("width", 40);
        $('.navbar').css("background-color", "black");
    } else {
        $('.logo').css("width", 80);
        $('.navbar').css("background-color", "transparent");
    }
});

$('body').scrollspy({
    target: ".navbar",
    offset: 84
});
$("#navbarNavAltMarkup a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 84
        }, 700);
    }
});
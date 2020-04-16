$(document).ready(function () {
    $(window).scroll(function () {
        var $nav = $(".navbar.navbar-dark.navbar-expand-md.fixed-top");
        if ($(document).scrollTop() > 100) {
            $nav.removeClass("unscrolled");
            $nav.addClass("scrolled");
        } else {
            $nav.addClass("unscrolled");
            $nav.removeClass("scrolled");
        }
    });
});


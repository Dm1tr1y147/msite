$(document).ready(function () {
    $(".main").onepage_scroll({
        sectionContainer: "section",
        easing: "ease-in-out",
        animationTime: 800,
        pagination: false,
        updateURL: true,
        beforeMove: function (index) { },
        afterMove: function (index) { },
        loop: true,
        keyboard: true,
        responsiveFallback: false,
        direction: "vertical"
    });
});
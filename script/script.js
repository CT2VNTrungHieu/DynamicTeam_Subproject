$(document).ready(function () {

    //navbar-acction
    $(".navbar-item").hover(function (e) {
        $(this).children(".nav-item-listText").css("display", "flex")

    }, function () {
        $(this).children(".nav-item-listText").css("display", "none")
    }
    );
    //textBody-action
    let myLink = document.querySelector(".textBody");
    myLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "404_notification.html ";
    });
    //owl-acction
    $("#owl-example").owlCarousel({
        items: 1,
        autoPlay: true,
        navigation: true,
        navigationText: [`<i class="fa-solid fa-angle-left"></i>`, `<i class="fa-solid fa-angle-right"></i>`],
    });
    $("#owl-example1").owlCarousel({
        items: 5,

        autoPlay: true,
        pagination: false,

    });
});
//Action search button


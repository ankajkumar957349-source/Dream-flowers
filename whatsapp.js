/*=====================================
  Dream Flower Decoration - whatsapp.js
======================================*/

document.addEventListener("DOMContentLoaded", function () {

    const whatsappButtons = document.querySelectorAll(
        ".whatsapp-float, .btn2"
    );

    const phoneNumber = "918340789947";

    const message = 
        "Hello Dream Flower Decoration, I want information about decoration service.";

    whatsappButtons.forEach(button => {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            const whatsappURL =
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank");

        });

    });

});

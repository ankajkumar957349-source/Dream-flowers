/*=====================================
  Dream Flower Decoration - contact.js
======================================*/

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.querySelector(".contact-form form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name")?.value.trim();
            const phone = document.getElementById("phone")?.value.trim();
            const email = document.getElementById("email")?.value.trim();
            const message = document.getElementById("message")?.value.trim();


            if (!name || !phone || !message) {

                alert("Please fill all required fields.");

                return;

            }


            alert(
                "Thank You!\n\n" +
                "Your message has been sent successfully."
            );


            contactForm.reset();

        });

    }

});

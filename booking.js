/*=====================================
  Dream Flower Decoration - booking.js
======================================*/

document.addEventListener("DOMContentLoaded", function () {

    const bookingForm = document.querySelector(".booking-form");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name")?.value.trim();
            const phone = document.getElementById("phone")?.value.trim();
            const service = document.getElementById("service")?.value;
            const date = document.getElementById("date")?.value;
            const address = document.getElementById("address")?.value.trim();

            if (!name || !phone || !service || !date || !address) {
                alert("Please fill all fields.");
                return;
            }

            alert(
                "Booking Successful!\n\n" +
                "Name: " + name +
                "\nPhone: " + phone +
                "\nService: " + service +
                "\nDate: " + date
            );

            bookingForm.reset();

        });

    }

});

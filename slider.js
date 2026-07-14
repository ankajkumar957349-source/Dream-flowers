/*=====================================
  Dream Flower Decoration - slider.js
======================================*/

const hero = document.querySelector(".hero");

const sliderImages = [
    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg",
    "images/slider4.jpg",
    "images/slider5.jpg"
];

let currentSlide = 0;

function changeSlider() {

    if (!hero) return;

    hero.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url('${sliderImages[currentSlide]}')`;

    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
    hero.style.backgroundRepeat = "no-repeat";

    currentSlide++;

    if (currentSlide >= sliderImages.length) {
        currentSlide = 0;
    }
}

changeSlider();

// Change image every 4 seconds
setInterval(changeSlider, 4000);

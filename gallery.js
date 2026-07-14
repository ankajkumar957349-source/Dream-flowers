/*=====================================
  Dream Flower Decoration - gallery.js
======================================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

if (galleryImages.length > 0) {

    // Create Lightbox
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";

    lightbox.style.position = "fixed";
    lightbox.style.top = "0";
    lightbox.style.left = "0";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0,0,0,0.9)";
    lightbox.style.display = "none";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    lightbox.style.zIndex = "9999";

    const img = document.createElement("img");

    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 0 20px #fff";

    lightbox.appendChild(img);

    document.body.appendChild(lightbox);

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";
            img.src = image.src;

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

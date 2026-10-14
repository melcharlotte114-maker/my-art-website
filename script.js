    const gallery = document.getElementById("gallery");


artworks.filter(function (artwork) {
    return artwork.featured === true;
}).forEach(function (artwork) {

    const artworkElement = document.createElement("div");
    artworkElement.classList.add("artwork-card");

    artworkElement.innerHTML = `
        <a href="artwork.html?id=${artwork.id}">
            <img src="${artwork.image}" alt="${artwork.title}">
        </a>

        <h3>
            <a href="artwork.html?id=${artwork.id}">
                ${artwork.title}
            </a>
        </h3>

        <p>${artwork.year}</p>


    `;

    gallery.appendChild(artworkElement);

});
// Gallery - Scroll Reveal Animation

function initGalleryReveal() {
    const artworks = document.querySelectorAll(
        ".featured-gallery .artwork-card"
    );

    if (!artworks.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    artworks.forEach((artwork) => {
        observer.observe(artwork);
    });
}

if (document.readyState === "complete") {
    initGalleryReveal();
} else {
    window.addEventListener("load", initGalleryReveal);
}
// Home Gallery - Mobile Grayscale to Color

function initHomeGalleryColor() {
    const artworkCards = document.querySelectorAll(
        ".featured-gallery .artwork-card"
    );

    if (!artworkCards.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-color");
            } else {
                entry.target.classList.remove("is-color");
            }
        });
    }, {
        threshold: 0.3
    });

    artworkCards.forEach((card) => {
        observer.observe(card);
    });
}

if (document.readyState === "complete") {
    initHomeGalleryColor();
} else {
    window.addEventListener("load", initHomeGalleryColor);
}
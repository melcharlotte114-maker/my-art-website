// Display all artworks on the Works page

const worksGrid = document.getElementById("works-grid");

artworks.forEach(function (artwork) {
    const card = document.createElement("div");

    card.className = "artwork-card";

    card.innerHTML = `
        <a href="artwork.html?id=${artwork.id}">
            <img src="${artwork.image}" alt="${artwork.title}">
            <h3>${artwork.title}</h3>
        </a>

        <p>${artwork.year}</p>
        <p>${artwork.material} · ${artwork.size}</p>
        <p>${artwork.price}</p>
        <p>${artwork.status}</p>
    `;

    worksGrid.appendChild(card);
});
// Mobile Works - Grayscale to Color

function initMobileArtworkColor() {
    const artworkCards = document.querySelectorAll(
        "#works-grid .artwork-card"
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
    threshold: 0.6
});

    artworkCards.forEach((card) => {
        observer.observe(card);
    });
}

window.addEventListener("load", initMobileArtworkColor);
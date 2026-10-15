// Display project covers on the Works page

const worksGrid = document.getElementById("works-grid");

projects.forEach(function (project) {
    const card = document.createElement("div");

    card.className = "artwork-card";

    card.innerHTML = `
        <a href="project.html?id=${project.id}">
            <img src="${project.cover}" alt="${project.title}">
            <h3>${project.title}</h3>
        </a>

        <p>${project.year}</p>
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
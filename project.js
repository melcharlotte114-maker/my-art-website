// Get the project ID from the URL
const params = new URLSearchParams(window.location.search);
const projectId = Number(params.get("id"));

// Find the selected project
const project = projects.find(function(item) {
    return item.id === projectId;
});

if (project) {
    // Display project information
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-year").textContent = project.year;
    document.getElementById("project-description-text").textContent =
    project.description || "";

    const projectArtworks = document.getElementById("project-artworks");

    // Display artworks belonging to this project
    project.artworks.forEach(function(artworkId) {
        const artwork = artworks.find(function(item) {
            return item.id === artworkId;
        });

        if (!artwork) return;

        const card = document.createElement("div");
        card.className = "artwork-card";

        card.innerHTML = `
    <a href="artwork.html?id=${artwork.id}">
        <img src="${artwork.image}" alt="${artwork.title}">
    </a>
`;

        projectArtworks.appendChild(card);
       // Show the hovered artwork in the large hero area
const hero = document.querySelector(".project-hero");

function showHeroImage() {
    hero.style.backgroundImage = `url("${artwork.image}")`;
    hero.style.backgroundSize = "contain";
    hero.style.backgroundPosition = "center";
    hero.style.backgroundRepeat = "no-repeat";
}

// First artwork appears automatically
if (!hero.style.backgroundImage) {
    showHeroImage();
}

// Desktop: change image on hover
card.addEventListener("mouseenter", showHeroImage);
    });
// Empty placeholders for future artworks
for (let i = 0; i < 3; i++) {
    const placeholder = document.createElement("div");
    placeholder.className = "artwork-card project-placeholder";
    placeholder.innerHTML = `
        <div style="
            width: 100%;
            height: 340px;
            background: #eeece7;
        "></div>
    `;
    projectArtworks.appendChild(placeholder);
}
} else {
    document.getElementById("project-title").textContent =
        "Project not found";
}
// Project gallery - Arrow navigation
const gallery = document.getElementById("project-artworks");
const prevButton = document.querySelector(".gallery-prev");
const nextButton = document.querySelector(".gallery-next");

if (gallery && prevButton && nextButton) {
    function scrollGallery(direction) {
        const firstCard = gallery.querySelector(".artwork-card");

        if (!firstCard) return;

        const gap = parseFloat(getComputedStyle(gallery).gap) || 0;
        const distance = firstCard.getBoundingClientRect().width + gap;

        gallery.scrollBy({
            left: direction * distance,
            behavior: "smooth"
        });
    }

    prevButton.addEventListener("click", function() {
        scrollGallery(-1);
    });

    nextButton.addEventListener("click", function() {
        scrollGallery(1);
    });
}
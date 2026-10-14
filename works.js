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
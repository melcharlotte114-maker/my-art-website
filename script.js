    const gallery = document.getElementById("gallery");


artworks.filter(function (artwork) {
    return artwork.featured === true;
}).forEach(function (artwork) {

    const artworkElement = document.createElement("div");

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
    const gallery = document.getElementById("gallery");


artworks.forEach(function(artwork) {

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

        <p>${artwork.material} · ${artwork.size}</p>

        <p>${artwork.price}</p>
        <p>${artwork.status}</p>
    `;

    gallery.appendChild(artworkElement);

});
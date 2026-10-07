const parameters = new URLSearchParams(window.location.search);

const artworkId = Number(parameters.get("id"));

const artwork = artworks.find(function(item) {
    return item.id === artworkId;
});


if (artwork) {

    document.getElementById("artwork-image").src = artwork.image;
    document.getElementById("artwork-image").alt = artwork.title;

    document.getElementById("artwork-title").textContent = artwork.title;

    document.getElementById("artwork-year").textContent = artwork.year;

    document.getElementById("artwork-material").textContent = artwork.material;

    document.getElementById("artwork-size").textContent = artwork.size;

    document.getElementById("artwork-price").textContent = artwork.price;

   document.getElementById("artwork-status").textContent = artwork.status;

if (artwork.status === "Sold") {

    document.getElementById("inquire-button").style.display = "none";

}

document.getElementById("inquire-button").addEventListener("click", function() {

    window.location.href = "contact.html?id=" + artwork.id;

});
    document.getElementById("artwork-description").textContent = artwork.description;

}
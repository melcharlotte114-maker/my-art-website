const parameters = new URLSearchParams(window.location.search);

const artworkId = Number(parameters.get("id"));

const artwork = artworks.find(function(item) {
    return item.id === artworkId;
});

if (artwork) {

    document.getElementById("artwork").value = artwork.title;

}
const searchInput = document.getElementById("search-input")
const resultArtist = document.getElementById("result-artist")
const resultPlaylist = document.getElementById("result-playlist")

function hidePlaylist() {
    resultPlaylist.classList.add("hidden")
}

function showPlaylist() {
    resultPlaylist.classList.remove("hidden")
}

function hideArtist() {
    resultArtist.classList.add("hidden")
}

function showArtist() {
    resultArtist.classList.remove("hidden")
}

function requestAPI(searchValue) {
    const url = `http://localhost:3000/artists?name_like=${searchValue}`

    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResult(result))
}

function displayResult(result) {
    hidePlaylist()
    
    const artistName = document.getElementById("artist-name")
    const artistImage = document.getElementById("artist-img")
    
    result.forEach((element) => {
        console.log(element.name)
        console.log(element.urlImg)

        artistName.innerText = element.name
        artistImage.src = element.urlImg
    });

    showArtist()
}

document.addEventListener("input", function() {
    const searchValue = searchInput.value.toLowerCase()

    console.log(searchValue)

    if (searchValue === "") {
        hideArtist()
        showPlaylist()
        return
    }
    requestAPI(searchValue)
})
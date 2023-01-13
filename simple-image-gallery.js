function highlight(imageEl) {
    selectSmallImage(imageEl);
    const bigImage = document.getElementById("big");
    bigImage.src = imageEl.src;
}

function selectSmallImage(imageEl) {
    const smallImages = document.querySelectorAll(".small-container > .small");
    smallImages.forEach(image => {
        image.classList.remove("selected");
    })
    imageEl.classList.add("selected");
}
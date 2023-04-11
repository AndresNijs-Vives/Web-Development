const setup = () => {
    const liElements = document.querySelectorAll("li");
    for (let i = 0; i < liElements.length; i++) {
        liElements[i].setAttribute("class", "listitem");
    }

    const newImage = document.createElement("img");
    newImage.setAttribute("src", "./images/jonas_selfie.jpg")
    newImage.setAttribute("class", "selfie");
    document.body.append(newImage);
}
window.addEventListener("load", setup);
const setup = () => {
    btnTry = document.getElementById("btnTry");

    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onclick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListener css
}

//mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br/>"
}

window.addEventListener("load", setup);
const setup = () => {
    const sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
    }

    // maak het basis kleur
    update();
}

const update = () => {
    const colorBox = document.getElementById("txtViewColor")
    const sliders = document.getElementsByClassName("slider");
    const labels = document.getElementsByClassName("label");
    let slidersValue = {};
    for (let i = 0; i < sliders.length; i++) {
        labels[i].innerHTML = (sliders[i].value * 2.55).toFixed(0);
    }
    colorBox.style.backgroundColor = "rgb(" + (sliders[0].value * 2.55) + ", " + (sliders[1].value * 2.55) + ", " + (sliders[2].value * 2.55) + ")";
}


// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);
const setup = () => {
    const sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
    }
    const btnSaveColor = document.getElementById("btnSaveColor");
    btnSaveColor.addEventListener("click", makeColorBox);
    // maak het basis kleur
    update();
}

const update = () => {
    const colorBox = document.getElementById("txtViewColor");
    const sliders = document.getElementsByClassName("slider");
    const labels = document.getElementsByClassName("label");
    let slidersValue = {};
    for (let i = 0; i < sliders.length; i++) {
        labels[i].innerHTML = (sliders[i].value * 2.55).toFixed(0);
    }
    colorBox.style.backgroundColor = "rgb(" + (sliders[0].value * 2.55) + ", " + (sliders[1].value * 2.55) + ", " + (sliders[2].value * 2.55) + ")";
}

const makeColorBox = () => {
    const sliders = document.getElementsByClassName("slider");
    const redValue = sliders[0].value * 2.55;
    const greenValue = sliders[1].value * 2.55;
    const blueValue = sliders[2].value * 2.55;

    let divElement = document.createElement("div");
    divElement.setAttribute("class", "colorBox");
    divElement.addEventListener("click", updateColor);
    divElement.setAttribute("data-red", redValue.toString());
    divElement.setAttribute("data-green", greenValue.toString());
    divElement.setAttribute("data-blue", blueValue.toString());
    divElement.style.backgroundColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";

    let buttonElement = document.createElement("button");
    buttonElement.addEventListener("click", deleteColor);
    let buttonTexNode = document.createTextNode("delete");
    divElement.appendChild(buttonElement);
    buttonElement.appendChild(buttonTexNode);

    document.querySelector("#colorsSaved").appendChild(divElement);
}

const updateColor = (event) => {
    const colorBox = document.getElementById("txtViewColor");
    const sliders = document.getElementsByClassName("slider");
    const labels = document.getElementsByClassName("label");

    const redValue = event.target.getAttribute("data-red");
    const greenValue = event.target.getAttribute("data-green");
    const blueValue = event.target.getAttribute("data-blue");

    for (let i = 0; i < sliders.length; i++) {
        labels[i].removeChild(labels[i].childNodes[0]);
    }

    labels[0].appendChild(document.createTextNode(Math.round(redValue)));
    labels[1].appendChild(document.createTextNode(Math.round(greenValue)));
    labels[2].appendChild(document.createTextNode(Math.round(blueValue)));

    sliders[0].value = redValue / 2.55;
    sliders[1].value = greenValue / 2.55;
    sliders[2].value = blueValue / 2.55;

    colorBox.style.backgroundColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}

const deleteColor = (event) => {
    event.target.parentElement.remove();
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);
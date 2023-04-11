const setup = () => {
    vraagVoorGemeentes();
}

const vraagVoorGemeentes = () => {
    let stoppen = false;
    let gemeentes = [];

    while (!stoppen) {
        let inputField = prompt("Geef gemeente: (type 'stop' om te stoppen.");
        stoppen = (inputField == null || inputField.toLowerCase() == "stop");
        if (!stoppen) {
            gemeentes.push(inputField);
        }
    }
    gemeentes.sort(compare);
    voegtGemeentesToe(gemeentes);
}

const compare = (a, b) => {
    return a.localeCompare(b);
}

const voegtGemeentesToe = (gemeentes) => {
    const slctGemeentes = document.getElementById("slctGemeentes");
    for (const gemeentesKey in gemeentes) {
        const newOptionElement = document.createElement('option');
        newOptionElement.value = gemeentes[gemeentesKey];
        newOptionElement.innerHTML = gemeentes[gemeentesKey];
        slctGemeentes.appendChild(newOptionElement);
    }
}

window.addEventListener("load", setup);
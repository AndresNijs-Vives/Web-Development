const setup = () => {
    const btnToonResultaat = document.getElementById("btnToonResultaat");
    btnToonResultaat.addEventListener("click", toonResultaat);
}

const toonResultaat = () => {
    const chkRoker = document.getElementById("chkRoker");
    const rdbMoedertaal = document.querySelector('input[name="rdbMoedertaal"]:checked');
    const optBuurland = document.getElementById("optBuurland");
    const optBestelling = document.getElementById("optBestelling");

    console.log("is " + (chkRoker.checked ? "een roker" : "geen roker"));
    console.log("moedertaal is " + rdbMoedertaal.value);
    console.log("Favoriete buurland is " + optBuurland.value);
    console.log("Bestelling bestaat uit " + getSelectValues(optBestelling));
}

function getSelectValues(select) {
    let result = [];
    let options = select && select.options;
    let opt;

    for (let i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[i];

        if (opt.selected) {
            result.push(opt.value || opt.text);
        }
    }
    return result;
}

window.addEventListener("load", setup);
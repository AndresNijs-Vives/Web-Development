const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
};

const valideerVoornaam = () => {
    // We gebruiken een CSS-selector om het tekstveld uit de DOM-tree op te pikken.
    // Het is dus niet nodig om dat input element een id te geven, toch niet omwille
    // van de javascript code (voor de usability beter wel, nml. voor het for attribuut
    // van het bijbehorende label, als je nu op het label klikt komt de cursor niet
    // meer vanzelf in het tekstveld terecht).
	let txtVoornaam = document.querySelector("#voornaam>input");
	let voornaam = txtVoornaam.value.trim();

	// Hoe we nu aan de bijbehorende error span geraken is weer een ander verhaal,
    // we doen het hier op dezelfde manier als in stap 2 nml ervan uitgaan dat
    // deze net na het input element komt (zie reportError).
    //
    // We hadden echter ook gewoon
    //    let errVoornaam = document.querySelector("#voornaam>.errorMessage")
    // kunnen doen

	if (voornaam.length > 30) {
		reportError(txtVoornaam, "max. 30 karakters");
	} else {
		clearError(txtVoornaam);
	}
};

const reportError = (element, message) => {
	// als je deze gebruikt, behoeft het error element natuurlijk geen id attribuute
	element.className="invalid";
	element.nextElementSibling.innerHTML = message; // LET OP : nextSibling zou niet werken, die geeft een text node (d.i. immers de next sibling)
};

const clearError = (element) => {
	// als je deze gebruikt, behoeft het error element natuurlijk geen id attribuute
	element.className="";
	element.nextElementSibling.innerHTML = "";
};

window.addEventListener("load", setup);
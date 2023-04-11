const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let voornaam = txtVoornaam.value.trim();
	// We gebruiken nu de kennis dat de error span net na het input veld komt.
	// Het is dus niet meer nodig om die een id te geven, noch om het element hier op te zoeken.
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
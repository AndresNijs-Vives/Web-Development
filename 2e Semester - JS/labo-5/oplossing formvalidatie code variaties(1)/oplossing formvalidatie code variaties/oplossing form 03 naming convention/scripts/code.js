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
	// We gebruiken de kennis van onze naming conventions om autom. de
	// bijbehorende error span op te zoeken
	if (voornaam.length > 30) {
		reportError(txtVoornaam, "max. 30 karakters");
	} else {
		clearError(txtVoornaam);
	}
};

const reportError = (element, message) => {
	let elementId=element.getAttribute("id"); // bv. txtVoornaam
	let errElementId="err"+elementId.substring(3, elementId.length); // bv. errVoornaam
	let errElement=document.getElementById(errElementId);
	element.className="invalid";
	errElement.innerHTML = message;
};

const clearError = (element) => {
	let elementId=element.getAttribute("id"); // bv. txtVoornaam
	let errElementId="err"+elementId.substring(3, elementId.length); // bv. errVoornaam
	let errElement=document.getElementById(errElementId);
	element.className="";
	errElement.innerHTML = "";
};


window.addEventListener("load", setup);
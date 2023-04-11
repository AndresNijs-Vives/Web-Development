const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	// we zullen op heel veel plaatsen in de code iets gelijkaardigs moeten doen om
	// een fout te melden of een eerdere foutmelding te verwijderen. We zouden dit
	// dus best in twee functies afsplitsen : reportError en clearError.
	if (voornaam.length > 30) {
		reportError(txtVoornaam, errVoornaam, "max. 30 karakters");
	} else {
		clearError(txtVoornaam, errVoornaam);
	}
};

const reportError = (element, errElement, message) => {
	element.className="invalid";
	errElement.innerHTML = message;
};

const clearError = (element, errElement) => {
	element.className="";
	errElement.innerHTML = "";
};

window.addEventListener("load", setup);
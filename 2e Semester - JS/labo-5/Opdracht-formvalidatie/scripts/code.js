const setup = () => {
    const btnValideer = document.querySelector('#btnValideer');
    btnValideer.addEventListener("click", validateInputs);
}

const validateInputs = () => {
    let hasError = false;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const inpFirstName = document.querySelector("#inpFirstName");
    const lblFirstnameError = document.querySelector('#lblFirstnameError');
    lblFirstnameError.style.display = 'none';

    const inpLastName = document.querySelector("#inpLastName");
    const lblLastNameError = document.querySelector('#lblLastnameError');
    lblLastNameError.style.display = 'none';

    const inpBirthDate = document.querySelector("#inpBirthDate");
    const lbBirthDateError = document.querySelector('#lbBirthDateError');
    lbBirthDateError.style.display = 'none';

    const inpEmail = document.querySelector("#inpEmail");
    const lblEmailError = document.querySelector('#lblEmailError');
    lblEmailError.style.display = 'none';

    const inpKids = document.querySelector("#inpKids");
    const lblNumberKidsError = document.querySelector('#lblNumberKidsError');
    lblNumberKidsError.style.display = 'none';

    // firstName
    if (inpFirstName.value.length > 30) {
        hasError = true;
        displayMessage(lblFirstnameError, "max. 30 karakters");
    }
    // lastName
    if (inpLastName.value.length > 50) {
        hasError = true;
        displayMessage(lblLastNameError, "max. 50 karakters");
    } else if (inpLastName.value === "") {
        hasError = true;
        displayMessage(lblLastNameError, "verplicht veld");
    }
    // birthDate
    if (inpBirthDate.value === "") {
        hasError = true;
        displayMessage(lbBirthDateError, "verplicht veld");
    } else if (!dateRegex.test(inpBirthDate.value)) {
        hasError = true;
        displayMessage(lbBirthDateError, "formaat is niet jjjj-mm-dd");
    }
    // email
    if (inpEmail.value === "") {
        hasError = true;
        displayMessage(lblEmailError, "verplicht veld");
    } else if (!emailRegex.test(inpEmail.value)) {
        hasError = true;
        displayMessage(lblEmailError, "geen geldig email adres");
    }
    // number kids
    const numKids = Number(inpKids.value);
    if (inpKids.value === "" || isNaN(inpKids.value) || numKids < 0) {
        hasError = true;
        displayMessage(lblNumberKidsError, "is geen positief getal");
    } else if (numKids > 99) {
        hasError = true;
        displayMessage(lblNumberKidsError, "is te vruchtbaar");
    }
    // show message to screen
    if (!hasError) {
        alert("proficiat");
    }
}

function displayMessage(element, message) {
    element.innerHTML = message;
    element.style.display = 'inline-block';
}

window.addEventListener("load", setup);
const setup = () => {
    //debugger;
    if (confirm("Do you want to change 'Hello world!' message to 'Welkom!'?")) {
        let pElement = document.getElementById("txtOutput");
        pElement.innerHTML = "Welkom!";
    }
}
window.addEventListener("load", setup);
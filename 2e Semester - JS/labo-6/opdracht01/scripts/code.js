const setup = () => {
    const par = document.querySelector("p");
    par.removeChild(par.childNodes[0]);
    par.appendChild(document.createTextNode("Good Job!"));
}
window.addEventListener("load", setup);
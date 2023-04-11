const setup = () => {

    let element = document.createElement("p");
    element.setAttribute("class", "color");
    let texNode = document.createTextNode("Hello world");
    element.appendChild(texNode);
    document.querySelector("#myDIV").appendChild(element);
}
window.addEventListener("load", setup);
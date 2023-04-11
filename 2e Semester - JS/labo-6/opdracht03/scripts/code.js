const setup = () => {
    document.querySelector("#myDIV").addEventListener("click", addTextToNode);
}

const addTextToNode = (event) => {
    const new_p_element = document.createElement("p");
    new_p_element.append(document.createTextNode("Some text!"));
    event.target.append(new_p_element);
}

window.addEventListener("load", setup);
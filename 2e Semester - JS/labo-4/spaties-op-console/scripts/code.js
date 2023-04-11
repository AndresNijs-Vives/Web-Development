const setup = () => {
    document.getElementById("btnSend").addEventListener("click", change);
}

const change = () => {
    let word = document.getElementById("txtname").value;
    console.log(word);
}


window.addEventListener("load", setup);
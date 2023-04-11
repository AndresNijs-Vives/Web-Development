const setup = () => {
    console.log("hello");
    //let lstPar = document.getElementsByClassName("color");
    let lstParDiv = document.querySelectorAll("#myDIV > .color");

    /*for (let i = 0; i < lstPar.length; i++) {
        lstPar[i].addEventListener("click", change);
    }*/

    for (let i = 0; i < lstParDiv.length; i++) {
        lstParDiv[i].addEventListener("click", changeDiv);
    }

}

const change = (event) => {
    event.target.className = "colorPar";
}

const changeDiv = (event) => {
    event.target.className = "colorParDiv";
}

window.addEventListener("load", setup);
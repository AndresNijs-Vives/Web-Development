let globalVar;

const setup = () => {

    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);

    let btnSend = document.addEventListener("btnSend");
    btnSend.addEventListener("Click", show);
}

const show = () => {
    let txtName = document.getElementById("txtName");

    if(txtName.value !== "")
    {
        alert("jouw naam is " + txtName.value);

        console.log("jouw naam is " + txtName.value);
        console.log(`jouw naam is ${txtName.value}`);
    }
    else
    {
        alert("gelieve naam in te vullen");
    }
}

const change = () => {

    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}
window.addEventListener("load", setup); 
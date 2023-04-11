const setup = () => {
    let txtInput = document.getElementById("txtInput");
    let txtNumBegin = document.getElementById("txtNumBegin");
    let txtNumEnd = document.getElementById("txtNumEnd");

    const btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", function () {
        subMyString(txtInput.value, txtNumBegin.value, txtNumEnd.value);
    });
}

const subMyString = (value, begin, end) => {
    console.log("hier");
    let newValue = value.substring(begin, end);
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerText = newValue;
}
window.addEventListener("load", setup);
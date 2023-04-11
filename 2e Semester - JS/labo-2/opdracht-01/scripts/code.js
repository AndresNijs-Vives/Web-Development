const setup = () => {
    alert("Dit is een mededeling");
    const confirmMessage = confirm("Weet u het zeker?");
    console.log("Confirm message: " + confirmMessage);
    const promptValue = prompt("Wat is uw naam");
    console.log("Prompt type: " + promptValue)
}
window.addEventListener("load", setup);
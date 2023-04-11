const setup = () => {
    const randomText = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    changeDeToHet(randomText);
}

const changeDeToHet = (text) => {
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "de") {
            words[i] = "het";
        }
    }
    console.log(words.join(" "));
}

window.addEventListener("load", setup);
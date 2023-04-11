const setup = () => {
    let textAboutAn = "De man van An geeft geen hand aan ambetante verwanten";

    console.log("'an' komt " + CheckRepeatableTextIndexOf(textAboutAn) + " keer voor in de tekst met indexOf.");
    console.log("'an' komt " + CheckRepeatableTextLastIndexOf(textAboutAn) + " keer voor in de tekst met lastIndexOf.");
}

const CheckRepeatableTextIndexOf = (text) => {
    let index = 0;
    let count = 0;
    while (text.indexOf('an', index) != -1) {
        index = text.indexOf('an', index) + 1;
        count++;
    }
    return count;
}

const CheckRepeatableTextLastIndexOf = (text) => {
    let index = text.length;
    let count = 0;
    while (text.lastIndexOf('an', index) != -1) {
        index = text.lastIndexOf('an', index) - 1;
        count++;
    }
    return count;
}

window.addEventListener("load", setup);
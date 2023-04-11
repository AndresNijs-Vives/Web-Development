const setup = () => {
    const randomWord = "onoorbaar";
    splitWordInTrigrams(randomWord);
}

const splitWordInTrigrams = (text) => {
    let trigrams = [];
    for (let i = 0; i < text.length - 2; i++) {
        const trigram = trigrams.push(text.slice(i, 3));
        console.log("trigram:", text.slice(i, i + 3));
    }
    return trigrams;
}

window.addEventListener("load", setup);
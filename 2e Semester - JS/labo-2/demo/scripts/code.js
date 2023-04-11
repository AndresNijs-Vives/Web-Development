const tree = () => {
    let hoogte = 6;
    let ster = '';
    for (let i = 0; i < hoogte; i++) {
        if (i % 2) {
            ster = ster + "*";
        } else {
            ster = ster + "+";
        }
        console.log(ster);
    }
}

const setup = () => {
    tree();
}
window.addEventListener("load", setup);
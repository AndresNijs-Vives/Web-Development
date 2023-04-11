const setup = () => {
    const amountValues = document.getElementsByName("amount");
    for (const amountValueKey in amountValues) {
        amountValues[amountValueKey].addEventListener("input", calculateTotal);
    }
}

const calculateTotal = () => {
    let totalValue = 0.00;

    const priceValues = document.getElementsByName("price");
    const amountValues = document.getElementsByName("amount");
    const btwValues = document.getElementsByName("btw");
    const subtotalValues = document.getElementsByName("subtotal");
    const txtTotal = document.getElementById("txtTotal");

    for (let i = 0; i < amountValues.length; i++) {
        const price = parseFloat(priceValues[i].innerHTML.replace(",", "."));
        const amount = amountValues[i].value;
        const btw = parseFloat(btwValues[i].innerHTML);

        const calculatedEndPrice = parseFloat((price * amount) * (btw / 100 + 1));

        totalValue += calculatedEndPrice;

        subtotalValues[i].innerHTML = calculatedEndPrice.toFixed(2).replace(".", ",") + " EURO";
    }

    txtTotal.innerHTML = totalValue.toFixed(2).replace(".", ",") + " EURO";
}

window.addEventListener("load", setup);
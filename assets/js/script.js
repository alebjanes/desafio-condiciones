function addBorder(image) {
    if (image.style.border) {
        image.style.border = ""; // Remove the border
    } else {
        image.style.border = "2px solid red"; // Add the border
    }
}

function verifyStickers() {
    const number1 = Number(document.getElementById("sticker1").value);
    const number2 = Number(document.getElementById("sticker2").value);
    const number3 = Number(document.getElementById("sticker3").value);
    
    const sum = number1 + number2 + number3;

    if (sum > 10) {
        document.querySelector("#parrafo-problema-2").innerHTML = `Llevas demasiados stickers! (${sum})`;
    }

    else if (sum < 10) {
        document.querySelector("#parrafo-problema-2").innerHTML = `Llevas ${sum} stickers`;
    }

    else {
        document.querySelector("#parrafo-problema-2").innerHTML = `Llevas justito 10 stickers`;
    }

}

function verificarPassword() {
    const number1 = Number(document.getElementById("numero1").value);
    const number2 = Number(document.getElementById("numero2").value);
    const number3 = Number(document.getElementById("numero3").value);

    if (number1 === 9 && number2 === 1 && number3 === 1) {
        document.querySelector("#parrafo-problema-3").innerHTML = `Password 1 es correcta!`;
    }

    else if (number1 === 7 && number2 === 1 && number3 === 4) {
        document.querySelector("#parrafo-problema-3").innerHTML = `Password 2 es correcta!`;
    }

    else {
        document.querySelector("#parrafo-problema-3").innerHTML = `Password incorrecto`;
    }
}
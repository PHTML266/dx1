function palavra() {
    var valorA = document.querySelector('#valora').value;
    var valorB = document.querySelector('#valorb').value;
    const texto = document.querySelector("h2");

    if (valorA.length > valorB.length) {
        texto.innerHTML = "A maior palavra é A";
    } else if (valorB.length > valorA.length) {
        texto.innerHTML = "A maior palavra é B";
    } else {
        texto.innerHTML = "*";
    }
}

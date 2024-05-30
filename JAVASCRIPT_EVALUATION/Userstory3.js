function SumaDiferencial(numero) {
    let sumaAlcuadrado = 0;
    let squareSuma = 0;

    for (let i = 1; i <= numero; i++) {
        sumaAlcuadrado += i * i;
        squareSuma += i;
    }

    squareSuma *= squareSuma;

    return squareSuma - sumaAlcuadrado;
}

console.log(SumaDiferencial(100));
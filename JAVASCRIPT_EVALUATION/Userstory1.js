function sumDigits(n) {
    let sum = 0;
    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
function splitNumberIntoDigits(number) {
    return number
        .toString()
        .split("")
        .map(Number);
}
//Optenemos el valor potencial

let exponentialVal = 2 ** 15;
console.log(exponentialVal);

//Dividir el valor en un arreglo de enteros
let sumDigitsValues = splitNumberIntoDigits(exponentialVal);
console.log(sumDigitsValues);

//Se hace la suma de los valores optenidos.
let Suma = 0;
for (let i = 0; i < sumDigitsValues.length; i++) {
    Suma += sumDigitsValues[i];
    console.log(sumDigitsValues[i]);
}
console.log(Suma);
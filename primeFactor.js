const readline = require("prompt-sync")
const prompt = readline();
let num = prompt("Enter the number")
function primeFactors(num) {
    var factors = [],
        divisor = 2;

    while (num > 2) {
        if (num % divisor == 0) {
            factors.push(divisor);
            num = num / divisor;
        }
        else {
            divisor++;
        }
    }
    return factors;
}
console.log(primeFactors(num));
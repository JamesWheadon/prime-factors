const { number } = require("yargs");

function primeFactors(num1, num2=null) {
    if (typeof(num1) != number || (typeof(num2) != number && num2 != null)) {
        return "Inputs must be numbers";
    }
    if (num2 == null) {
        primeFactorDecomp(num1);
    }
    else
}
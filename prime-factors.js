const { number } = require("yargs");

function primeFactors(num1, num2=null) {
    if (typeof(num1) != number || (typeof(num2) != number && num2 != null)) {
        return "Inputs must be numbers";
    }
    if (num1 <= 2 || (typeof(num2) == number && num2 <=2)) {
        return "Inputs must be greater than 1";
    }
    if (Math.round(num1) != num1 || (typeof(num2) == number && Math.round(num2) != num2)) {
        return "Inputs must be integers";
    }
    if (num2 == null) {
        primeFactorDecomp(num1);
    }
    else {
        commonFactorMultiple(num1, num2);
    }
}

function primeFactorDecomp(num) {
    let primes = [];
    let max = Math.round(num / 2);
    for (let i = 2; i <= max; i++) {
        iPrime = true;
        for (prime of primes) {
            if (i % prime == 0) {
                iPrime = false;
                break;
            }
        }
        if (iPrime) {
            primes.push(i);
        }
    }
    let primeFactors = [];
    let primeIndex = 0;
    while (num !== 1) {
        if (num % primes[primeIndex] == 0) {
            primeFactors.push(primes[primeIndex]);
            num = num / primes[primeIndex];
        }
        else {
            primeIndex++;
        }
        console.log(num);
    }
    return primeFactors;
}

console.log(primeFactorDecomp(20));
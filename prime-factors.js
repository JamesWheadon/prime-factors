const { number } = require("yargs");

function primeFactors(num1, num2=null) {
    if (!Number.isInteger(num1) || (!Number.isInteger(num2) && num2 != null)) {
        return "Inputs must be integers";
    }
    if (num1 < 2 || (Number.isInteger(num2) && num2 <2)) {
        return "Inputs must be greater than 1";
    }
    if (num2 == null) {
        return primeFactorDecomp(num1);
    }
    else {
        return commonFactorMultiple(num1, num2);
    }
}

function primeFactorDecomp(num) {
    let primes = [];
    for (let i = 2; i <= num; i++) {
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
    }
    return primeFactors;
}

function commonFactorMultiple(num1, num2) {
    let primes1 = primeFactorDecomp(num1);
    let primes2 = primeFactorDecomp(num2);
    let commonPrimes = [];
    let allPrimes = [];
    while( primes1.length > 0 && primes2.length > 0 )
    {  
        if (primes1[0] < primes2[0] ) {
            allPrimes.push(primes1.shift());
        }
        else if (primes1[0] > primes2[0] ) {
            allPrimes.push(primes2.shift());
        }
        else {
            allPrimes.push(primes1.shift());
            commonPrimes.push(primes2.shift());
        }
    }
    let HCF = 1;
    for (factor of commonPrimes) {
        HCF = HCF * factor;
    }
    let LCM = 1;
    for (factor of allPrimes) {
        LCM = LCM * factor;
    }
    if (primes1.length > 0) {
        for (factor of primes1) {
            LCM = LCM * factor;
        }
    }
    else if (primes2.length > 0) {
        for (factor of primes2) {
            LCM = LCM * factor;
        }
    }
    return [HCF, LCM];
}

module.exports = {primeFactors}
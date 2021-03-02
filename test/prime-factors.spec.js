const primeFunctions = require("../prime-factors.js");
let primeFactor = primeFunctions.primeFactors;

describe("prime factors", () => {
    test('The function is defined', () => {
        expect(primeFactor()).toBeDefined();
    });
    test('It passes with one input', () => {
        expect(primeFactor()).toBeTruthy();
    });
    test('It passes with two inputs', () => {
        expect(primeFactor()).toBeTruthy();
    });
    test('It wont return factors given a single input that isnt a number', () => {
        expect(primeFactor("2")).toEqual("Inputs must be integers");
    });
    test('It wont return factors given any input that isnt a number', () => {
        expect(primeFactor("2", 8)).toEqual("Inputs must be integers");
    });
    test('It needs integer inputs', () => {
        expect(primeFactor(2.5, 8)).toEqual("Inputs must be integers");
    });
    test('Inputs must be larger than 1', () => {
        expect(primeFactor(1, 8)).toEqual("Inputs must be greater than 1");
    });
});

describe("prime factors of a single number", () => {
    test.each([
        [2, [2]],
        [24, [2, 2, 2, 3]],
        [95, [5, 19]],
      ])('when given ${number}, returns ${factors}', (number, factors) => {
        expect(primeFactor(number)).toEqual(factors);
    })
});

describe("HCF and LCM of 2 numbers", () => {
    test.each([
        [12, 18, [6, 36]],
        [24, 30, [6, 120]],
        [25, 40, [5, 200]],
      ])('when given ${number}, returns ${factors}', (number1, number2, factors) => {
        expect(primeFactor(number1, number2)).toEqual(factors);
    })
});
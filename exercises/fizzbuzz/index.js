// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
function test(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('fizzbuzz');
    } else if (number % 3 === 0) {
        console.log('fizz');
    } else if (number % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(number);
    }
}
function fizzBuzz(n) {
    for (i = 1; i <= n; i++) {
        test(i);
    }
}

module.exports = fizzBuzz;

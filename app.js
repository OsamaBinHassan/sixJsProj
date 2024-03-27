for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}
let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log("The factorial of", number, "is:", factorial);
let Nuumber = 7;

console.log("Multiplication table for", Nuumber);
for (let i = 1; i <= 10; i++) {
    console.log(Nuumber + " * " + i + " = " + (Nuumber * i));
}

let firstTerm = 0;
let secondTerm = 1;
let nextTerm;

console.log("Fibonacci series up to the 10th term:");

console.log(firstTerm); // Print the first term

for (let i = 1; i < 10; i++) {
    console.log(secondTerm); // Print the current term
    
    nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
}
let digits = 123;
let sum = 0;

// Loop until the digits becomes 0
while (digits > 0) {
    // Extract the last digit of the digits using the remainder operator (%)
    let digit = digits % 10;
    
    // Add the extracted digit to the sum
    sum += digit;
    
    // Remove the last digit from the digits (integer division by 10)
    digits = Math.floor(digits / 10);
}

console.log("Sum of digits:", sum);

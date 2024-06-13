function calculate(num1, num2, operation) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid operation';
    }
    return result;
}
console.log(calculate(1, 5, 'add'));       // Output: 6
console.log(calculate(1, 5, 'subtract'));  // Output: -4
console.log(calculate(2, 5, 'multiply'));  // Output: 10
console.log(calculate(100, 5, 'divide'));    // Output: 20
console.log(calculate(1, 10, 'divide'));    // Output: 0.1
  


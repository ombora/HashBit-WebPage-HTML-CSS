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

// Example usage:
console.log(calculate(1, 5, 'add'));       // Output: 15
console.log(calculate(1, 5, 'subtract'));  // Output: 5
console.log(calculate(2, 5, 'multiply'));  // Output: 50
console.log(calculate(100, 5, 'divide'));    // Output: 2
console.log(calculate(1, 10, 'divide'));    // Output: Error: Division by zero
  // Output: Error: Invalid operation


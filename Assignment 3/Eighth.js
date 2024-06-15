function repeatedDigitSum(num) {
    // Helper function to sum the digits of a number
    function sumOfDigits(n) {
        return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    // Continue summing the digits until a single digit is obtained
    while (num >= 10) {
        num = sumOfDigits(num);
    }

    return num;
}

// Example usage
const number = 841;
const result = repeatedDigitSum(number);

console.log(result); // Output: 4

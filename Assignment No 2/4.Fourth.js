function sumOfProductOfDigits(n1, n2) {
    // Convert the numbers to strings to easily access each digit
    let str1 = n1.toString();
    let str2 = n2.toString();

    // Initialize the sum to 0
    let sum = 0;

    // Get the length of both strings
    let len1 = str1.length;
    let len2 = str2.length;

    // Iterate from the end of both strings
    for (let i = 0; i < Math.max(len1, len2); i++) {
        // Get the corresponding digits from the end
        let digit1 = i < len1 ? parseInt(str1[len1 - 1 - i]) : 0;
        let digit2 = i < len2 ? parseInt(str2[len2 - 1 - i]) : 0;

        // Add the product of the digits to the sum
        sum += digit1 * digit2;
    }

    return sum;
}
console.log(sumOfProductOfDigits(6, 34));      // Output: 24
console.log(sumOfProductOfDigits(123, 456));   // Output: 32 (3*6 + 2*5 + 1*4)
console.log(sumOfProductOfDigits(9, 12345));   // Output: 45 (9*5 + 0*4 + 0*3 + 0*2 + 0*1)
console.log(sumOfProductOfDigits(0, 0));       // Output: 0


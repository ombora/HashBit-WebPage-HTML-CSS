function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}

// Example usage
const input = "Hello";
const output = reverseString(input);

console.log(output); // Output: "olleH"

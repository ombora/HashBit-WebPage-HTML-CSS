let string = 'INDIA';

// Convert the string into an array of characters
let charArray = string.split('');

// Use splice to replace the last character 'A' with 'ONESIA'
charArray.splice(3, 4, 'O', 'N', 'E', 'S', 'I', 'A');

// Join the array back into a string
let newString = charArray.join('');

console.log(newString); // Output: 'INDONESIA'


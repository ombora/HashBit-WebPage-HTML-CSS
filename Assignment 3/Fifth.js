function correctfn(string, wrong, correct) {
    // Create a regular expression to find the wrong word
    // The 'g' flag ensures that all occurrences are replaced
    const regex = new RegExp(wrong, 'g');
    // Use the replace method to replace the wrong word with the correct word
    return string.replace(regex, correct);
}

// Example usage
const originalString = "This is a sample sentance with the wrong word.";
const wrongWord = "sentance";
const correctWord = "sentence";

const correctedString = correctfn(originalString, wrongWord, correctWord);

console.log(correctedString); // Output: "This is a sample sentence with the wrong word."


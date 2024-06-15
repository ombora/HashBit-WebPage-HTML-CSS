function countWords(paragraph) {
    // Split the paragraph by spaces and filter out any empty strings
    const words = paragraph.trim().split(/\s+/);
    return words.length;
}

// Example usage
const paragraph = "This is a sample paragraph to count the number of words.";
const wordCount = countWords(paragraph);

console.log(wordCount); // Output: 11

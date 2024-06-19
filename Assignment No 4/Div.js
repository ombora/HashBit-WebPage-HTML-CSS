function createDiv(width, height, text) {
    // Create a new div element
    var newDiv = document.createElement('div');

    // Set the width and height of the new div
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';

    // Set the text content of the new div
    newDiv.textContent = text;

    // Get the container element by its id
    var container = document.getElementById('container');

    // Append the new div to the container
    if (container) {
        container.appendChild(newDiv);
    } else {
        console.error('Container element not found');
    }
}

createDiv(100, 100, 'Hello, World!');

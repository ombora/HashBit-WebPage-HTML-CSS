// javascript code goes here
document.addEventListener('DOMContentLoaded', function() {
    var textContainer = document.getElementById('text-container');
    var colorBox = document.getElementById('colorbox');
    var colorChangeBtn = document.getElementById('colorchange');
    var fontSizeSlider = document.getElementById('fontsize');
    var underlineBtn = document.getElementById('underline');
    var italicBtn = document.getElementById('italic');
    var boldBtn = document.getElementById('bold');
    var fontList = document.getElementById('list');
    var getStyleBtn = document.getElementById('getstyle');
    var cssProps = document.getElementById('css-props');

    // Change color
    colorChangeBtn.addEventListener('click', function() {
        var color = colorBox.value;
        textContainer.style.color = color;
    });

    // Change font size
    fontSizeSlider.addEventListener('input', function() {
        var fontSize = fontSizeSlider.value + 'px';
        textContainer.style.fontSize = fontSize;
    });

    // Toggle underline
    underlineBtn.addEventListener('click', function() {
        if (textContainer.style.textDecoration === 'underline') {
            textContainer.style.textDecoration = 'none';
        } else {
            textContainer.style.textDecoration = 'underline';
        }
    });

    // Toggle italic
    italicBtn.addEventListener('click', function() {
        if (textContainer.style.fontStyle === 'italic') {
            textContainer.style.fontStyle = 'normal';
        } else {
            textContainer.style.fontStyle = 'italic';
        }
    });

    // Toggle bold
    boldBtn.addEventListener('click', function() {
        if (textContainer.style.fontWeight === 'bold') {
            textContainer.style.fontWeight = 'normal';
        } else {
            textContainer.style.fontWeight = 'bold';
        }
    });

    // Change font family
    fontList.addEventListener('change', function() {
        var fontFamily = fontList.value;
        textContainer.style.fontFamily = fontFamily;
    });

    // Get and display CSS properties
    getStyleBtn.addEventListener('click', function() {
        var style = window.getComputedStyle(textContainer);
        var cssText = `
            color: ${style.color};
            font-size: ${style.fontSize};
            font-family: ${style.fontFamily};
            text-decoration: ${style.textDecoration};
            font-style: ${style.fontStyle};
            font-weight: ${style.fontWeight};
        `.trim().replace(/\s\s+/g, ' ');

        cssProps.textContent = cssText;
    });
});

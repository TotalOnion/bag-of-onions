const shadowBox = document.querySelector('.boxshadow__view-window-shadow-box');
const cssOutput = document.getElementById('cssOutput');

document.querySelectorAll('.boxshadow__controls input').forEach(input => {
    input.addEventListener('input', function () {
        const hOffset = document.getElementById('horizontal-offset').value;
        const vOffset = document.getElementById('vertical-offset').value;
        const blurRadius = document.getElementById('blur-radius').value;
        const spreadRadius = document.getElementById('spread-radius').value;
        const color = document.getElementById('color-picker').value;

        const boxShadowCss = `${hOffset}px ${vOffset}px ${blurRadius}px ${spreadRadius}px ${color}`;
        shadowBox.style.boxShadow = boxShadowCss;

        cssOutput.textContent = `box-shadow: ${boxShadowCss};`;
    });
});

cssOutput.addEventListener('click', function () {
    // Copy the CSS output text to the clipboard
    const range = document.createRange();
    range.selectNode(cssOutput);
    window.getSelection().removeAllRanges(); // Clear any existing selection
    window.getSelection().addRange(range); // Select the text
    try {
        document.execCommand('copy'); // Copy the text to the clipboard
        window.getSelection().removeAllRanges(); // Deselect the text

        // Add the active class for the success message
        cssOutput.classList.add('active');
        setTimeout(() => {
            cssOutput.classList.remove('active');
        }, 2000); // Remove the active class after 2 seconds
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});

// Elements selection
const viewportElement = document.querySelector('.screensize__viewport');
const screenSizeActualElement = document.querySelector('.screensize__actual');
const copyToClipboardButton = document.getElementById('copyToClipboard');
const buttonConfirmations = document.querySelector('.screensize__button-confirmations');

// Updates the viewport size display
function updateViewportDisplay() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    viewportElement.innerHTML = `Viewport: ${viewportWidth}x${viewportHeight}`;
    return `Viewport: ${viewportWidth}x${viewportHeight}`;
}

// Updates the screen size display
function updateScreenSizeDisplay() {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    screenSizeActualElement.innerHTML = `Actual Screensize: ${screenWidth}x${screenHeight}`;
    return `Actual Screensize: ${screenWidth}x${screenHeight}`;
}

// Combines viewport and screen size info
function combineScreenInfo(viewportInfo, screenSizeInfo) {
    return `${viewportInfo}\n${screenSizeInfo}`;
}

// Copies the combined screen information to clipboard
function copyInfoToClipboard(combinedInfo) {
    navigator.clipboard.writeText(combinedInfo)
        .then(() => buttonConfirmations.innerHTML = "Copied")
        .catch(err => buttonConfirmations.innerHTML = "Copy failed");
}

// Event listeners
copyToClipboardButton.addEventListener('click', () => {
    const viewportInfo = updateViewportDisplay();
    const screenSizeInfo = updateScreenSizeDisplay();
    const combinedInfo = combineScreenInfo(viewportInfo, screenSizeInfo);
    copyInfoToClipboard(combinedInfo);
});

window.addEventListener('resize', () => {
    updateViewportDisplay();
});

// Initial display updates
updateViewportDisplay();
updateScreenSizeDisplay();

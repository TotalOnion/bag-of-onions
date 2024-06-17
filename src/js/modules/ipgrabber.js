const ipAddress = document.querySelector('.ipgrabber__address');
const copyToClipboardButton = document.querySelector('.ipgrabber__click-to-copy');
const buttonConfirmations = document.querySelector('.ipgrabber__button-confirmations');

function copyInfoToClipboard(combinedInfo) {
    navigator.clipboard.writeText(combinedInfo)
        .then(() => buttonConfirmations.innerHTML = "Copied")
        .catch(err => buttonConfirmations.innerHTML = "Copy failed");
}

// Event listeners
copyToClipboardButton.addEventListener('click', () => {
    copyInfoToClipboard(ipAddress.innerHTML);
});
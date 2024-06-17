// Array of sentences
const sentences = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"Cras venenatis elementum nunc, vel maximus tellus dignissim nec.",
	"Donec sagittis bibendum lacus, ut tempor eros sollicitudin eu.",
	"Morbi pretium nibh ligula, vel vestibulum felis malesuada id.",
	"Proin mollis ornare dui, sed tristique augue finibus sit amet.",
];

// Elements selection
const textElement = document.querySelector(".lorem-ipsum__generated-text");
const copyToClipboardButton = document.querySelector(
	".lorem-ipsum__click-to-copy"
);
const buttonConfirmations = document.querySelector(
	".lorem-ipsum__button-confirmations"
);
const generateTextButton = document.querySelector(
	".lorem-ipsum__generate-text"
);

// Generate random sentence
function getRandomSentence() {
	let randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
	return randomSentence;
}

// Generate random paragraph
function getRandomParagraph() {
	let paragraph = "";
	// Set the minimum number of words
	let minimumCharacterLength = 250;
	let firstSentence = true;
	while (paragraph.length < minimumCharacterLength) {
		if (firstSentence) {
			paragraph = paragraph.concat(getRandomSentence());
			firstSentence = false;
		} else {
			paragraph = paragraph.concat(" " + getRandomSentence());
		}
	}
	console.log(paragraph);
	return paragraph;
}

// Event listeners
copyToClipboardButton.addEventListener("click", () => {
	navigator.clipboard
		.writeText(getRandomParagraph())
		.then(() => (buttonConfirmations.innerHTML = "Copied"))
		.catch((err) => (buttonConfirmations.innerHTML = "Copy failed"));
});

generateTextButton.addEventListener("click", () => {
	textElement.innerHTML = getRandomParagraph();
});

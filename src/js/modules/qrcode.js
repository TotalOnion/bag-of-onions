import QRCode from "qrcodejs2";

// Variables
const qrCodeForm = document.querySelector(".qrcode__form");
const qrCodeBox = document.querySelector(".qrcode__qr-box");
const urlInput = document.querySelector(".qrcode__url-input");
const darkColorInput = document.querySelector(".qrcode__dark-colour-input");
const lightColorInput = document.querySelector(".qrcode__light-colour-input");
const toggleLogo = document.querySelector(".qrcode__toggle-logo");
const exportModal = document.querySelector(".qrcode__modal");
const openExportModal = document.querySelector(".qrcode__export-qr-code");
const closeExportModal = document.querySelector(".qrcode__modal-close");
const saveQRCode = document.querySelector(".qrcode__save-button");
const fileTypeInput = document.querySelector(".qrcode__file-type");
const qrSizeInput = document.querySelector(".qrcode__size");

// Initialize the QRCode object
const qrcode = new QRCode(qrCodeBox, {
	text: "",
	width: 150,
	height: 150,
	colorDark: "#1ed2d2",
	colorLight: "#00fe00",
	correctLevel: QRCode.CorrectLevel.H,
});

function generateQRCode(url, darkColor, lightColor) {
	qrcode.clear();
	qrcode._htOption.colorDark = darkColor;
	qrcode._htOption.colorLight = lightColor;
	qrcode.makeCode(url);
}

function isValidURL(url) {
	const urlPattern = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))" + // domain name and extension
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
			"(\\#[-a-z\\d_]*)?$",
		"i" // fragment locator
	);
	return !!urlPattern.test(url);
}

function handleFormUpdate() {
	const url = urlInput.value;
	const darkColor = darkColorInput.value;
	const lightColor = lightColorInput.value;

	if (isValidURL(url)) {
		generateQRCode(url, darkColor, lightColor);

		if (!qrCodeBox.classList.contains("active")) {
			qrCodeBox.classList.add("active");
		}
		urlInput.setCustomValidity("");
	} else {
		console.log("Invalid URL");
		urlInput.setCustomValidity("Please enter a valid URL");
		urlInput.reportValidity();
		if (qrCodeBox.classList.contains("active")) {
			qrCodeBox.classList.remove("active");
		}
	}
}

function handleToggleLogo() {
	toggleLogo.checked
		? qrCodeBox.classList.add("show-logo")
		: qrCodeBox.classList.remove("show-logo");
}

function handleToggleModal(event) {
	event.preventDefault();
	if (!exportModal.classList.contains("active")) {
		exportModal.classList.add("active");
	} else {
		exportModal.classList.remove("active");
	}
}

function handleSaveQRCode(event) {
	event.preventDefault();
	const fileType = fileTypeInput.value;
	const qrSize = qrSizeInput.value;
	const image = qrCodeBox.querySelector("img");

	if (image) {
		const canvas = document.createElement("canvas");
		canvas.width = qrSize;
		canvas.height = qrSize;
		const context = canvas.getContext("2d");
		const imgElement = new Image();
		imgElement.src = image.src;

		imgElement.onload = () => {
			context.drawImage(imgElement, 0, 0, qrSize, qrSize);
			if (qrCodeBox.classList.contains("show-logo")) {
				const logoImgElement = new Image();
				logoImgElement.src =
					"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧅</text></svg>";
				logoImgElement.onload = () => {
					const logoSize = qrSize / 3;
					const logoXY = (qrSize - logoSize) / 2;
					context.drawImage(logoImgElement, logoXY, logoXY, logoSize, logoSize);
					canvas.toBlob((blob) => {
						const link = document.createElement("a");
						link.href = URL.createObjectURL(blob);
						link.download = `onion_qrcode.${fileType}`;
						link.click();
					}, `image/${fileType}`);
				};
			} else {
				canvas.toBlob((blob) => {
					const link = document.createElement("a");
					link.href = URL.createObjectURL(blob);
					link.download = `onion_qrcode.${fileType}`;
					link.click();
				}, `image/${fileType}`);
			}
		};
	}
}

urlInput.addEventListener("input", handleFormUpdate);
darkColorInput.addEventListener("input", handleFormUpdate);
lightColorInput.addEventListener("input", handleFormUpdate);
toggleLogo.addEventListener("change", handleToggleLogo);
openExportModal.addEventListener("click", handleToggleModal);
closeExportModal.addEventListener("click", handleToggleModal);
saveQRCode.addEventListener("click", handleSaveQRCode);

const express = require("express");
const router = express.Router();

router.get("/qrcode", (req, res) => {
	res.render("modules/qrcode", {
		title: "My Page",
		heading: "Hello, World!",
		message: "This is a message rendered from Twig.js!",
	});
});

module.exports = {
	router: router,
	name: "qrcode",
	category: "other-tools",
	path: "/qrcode",
	hideNav: false,
};

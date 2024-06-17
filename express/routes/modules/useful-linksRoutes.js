const express = require("express");
const router = express.Router();

router.get("/useful-links", (req, res) => {
	res.render("modules/useful-links", {
		title: "My Page",
		heading: "Hello, World!",
		message: "This is a message rendered from Twig.js!",
	});
});

module.exports = {
	router: router,
	name: "Useful Links",
	category: "other-tools",
	path: "/useful-links",
	hideNav: false,
};

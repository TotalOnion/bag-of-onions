const express = require("express");
const router = express.Router();

router.get("/lorem-ipsum", (req, res) => {
	res.render("modules/loremipsum", {
		title: "My Page",
		heading: "Hello, World!",
		message: "This is a message rendered from Twig.js!",
	});
});

module.exports = {
	router: router,
	name: "Lorem Ipsum Generator",
	category: "brand-tools",
	path: "/lorem-ipsum",
	hideNav: false,
};

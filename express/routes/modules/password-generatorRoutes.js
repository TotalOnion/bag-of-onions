const express = require("express");
const router = express.Router();

router.get("/password-generator", (req, res) => {
    res.render("modules/password-generator", {
        title: "My Page",
        heading: "Hello, World!",
        message: "This is a message rendered from Twig.js!",
    });
});

module.exports = {
    router: router,
    name: "Password Generator",
    category: "other-tools",
    path: "/password-generator",
    hideNav: false,
};

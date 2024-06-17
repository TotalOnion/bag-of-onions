const express = require('express');
const router = express.Router();

router.get("/screensize", (req, res) => {
    res.render("modules/screensize", {
        title: 'My Page',
        heading: 'Hello, World!',
        message: 'This is a message rendered from Twig.js!'
    });
});

module.exports = {
    router: router,
    name: 'Whats My Screensize?',
    category: 'brand-tools',
    path: '/screensize',
    hideNav: false,
};

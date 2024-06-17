const express = require('express');
const router = express.Router();

router.get("/box-shadow", (req, res) => {
    res.render("modules/boxshadow", {
        title: 'My Page',
        heading: 'Hello, World!',
        message: 'This is a message rendered from Twig.js!'
    });
});

module.exports = {
    router: router,
    name: 'Box Shadow Generator',
    category: 'dev-tools',
    path: '/box-shadow',
    hideNav: false,
};

const express = require('express');
const router = express.Router();

router.get("/whatsmyip", (req, res) => {
    res.render("modules/ipgrabber", {
        userIp: req.ip,
    });
});

module.exports = {
    router: router,
    name: 'Whats My IP?',
    category: 'brand-tools',
    path: '/whatsmyip',
    hideNav: false,
};
const express = require('express');
const router = express.Router();
const pool = require('../../db');

router.get("/requests", (req, res) => {
    res.render("modules/requests", {
        title: 'My Page',
        heading: 'Hello, World!',
        message: 'This is a message rendered from Twig.js!'
    });
});

router.post('/submit-request', async (req, res) => {
    console.log(req.body); // Check what is received
    const { name, email, role, toolname, tooltype, description, comments } = req.body;

    try {
        const queryText = 'INSERT INTO requests(name, email, role, toolname, tooltype, description, comments) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
        const values = [name, email, role, toolname, tooltype, description, comments];
        const result = await pool.query(queryText, values);
        console.log(result.rows[0]); // Output the inserted row
        res.send('Thank you for your submission!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong with the database operation.');
    }
});

module.exports = {
    router: router,
    name: 'Request A Tool',
    category: 'brand-tools',
    path: '/requests',
    hideNav: true,
};

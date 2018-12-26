const express = require('express');
const router = express.Router();

/** Register route */
router.post('/register', (req, res) => {
    res.send('Register route')
});

/** Authentication route */
router.post('/authenticate', (req, res) => {
    res.send('Authenticate route')
});

/** Profile route */
router.get('/profile', (req, res) => {
    res.send('Profile route')
});

module.exports = router;
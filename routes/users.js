const express = require('express');
const router = express.Router();

/** Register route */
router.get('/register', (req, res) => {
    res.send('Register route')
})

/** Authentication route */
router.get('/authenticate', (req, res) => {
    res.send('Authenticate route')
})

/** Profile route */
router.get('/profile', (req, res) => {
    res.send('Profile route')
})

/** Validation route */
router.get('/validate', (req, res) => {
    res.send('Validation route')
})

module.exports = router;
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');

/** Register route */
router.post('/register', (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: 'Failed to register user'});
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    }); 
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
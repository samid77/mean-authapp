const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');


const app = express();

const users = require('./routes/users')

/** Port Number */
const port = 3005;

/** CORS Middleware */
app.use(cors());

/** Set Static Folder for Front End */
app.use(express.static(path.join(__dirname, 'client')));

/** Body Parser Middleware */
app.use(bodyParser.json());
app.use('/users', users);

/** Index Route */
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});


/** Start Server */
app.listen(port, () => {
    console.log('Server started at port ' + port);
});

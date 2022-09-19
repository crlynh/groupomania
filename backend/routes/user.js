const express = require('express');
const router = express.Router();

// importation controllers/user.js
const userCtrl = require('../controllers/user');

// importation middleware/password
const password = require('../middleware/password');

// importation midlleware/email
const email = require('../middleware/email');

router.post('/', password, email, userCtrl.signup, userCtrl.login);
// router.post('/login', userCtrl.login); 

module.exports = router;
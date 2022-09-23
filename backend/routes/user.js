const express = require('express');
const router = express.Router();

// importation controllers/user.js
const userCtrl = require('../controllers/user');

router.post('/login', userCtrl.login); 
router.post('/signup', userCtrl.signup);

module.exports = router;
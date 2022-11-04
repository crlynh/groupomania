const express = require('express');
const router = express.Router();

// importation controllers/user.js
const authCtrl = require('../controllers/auth');

router.post('/login', authCtrl.login); 
router.post('/signup', authCtrl.signup);

module.exports = router;
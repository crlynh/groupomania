const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user')

router.use( (req, res, next) => {
    const event = new Date()
    next()
})

router.get('/', userCtrl.getAllUsers)
router.get('/:id', userCtrl.getOneUser)
router.delete('/:id', userCtrl.deleteUser)

module.exports = router

const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user')

router.use( (req, res, next) => {
    const event = new Date()
    console.log('User Time:', event.toString())
    next()
})

router.get('/', userCtrl.getAllUsers)
router.get('/:id', userCtrl.getOneUser)
router.delete('/:id', userCtrl.deleteUser)

module.exports = router

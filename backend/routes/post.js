const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post');

// les routes
router.get('/home', postCtrl.getAllPost);
router.post('/create', auth, multer, postCtrl.createPost);
router.get('/:id', auth, postCtrl.getOnePost);
router.put('/:id', auth,  multer, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);
router.post("/:id/like", auth, postCtrl.likePost);

// exportation du module
module.exports = router;
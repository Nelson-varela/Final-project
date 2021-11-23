const express = require('express');

const router = express.Router();

const{ getPosts, getPost, createPost, updatePost, likePost, commentPost, deletePost }
= require( '../controllers/postNews-controller.js')

const auth = require('../middleware/auth.js')




router.get('/', getPosts);
router.get('/:id', auth, getPost);

router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);

module.exports = router;




/* const { Router } = require('express');
const router = Router();

const auth = require('../middleware/auth')

const { getPosts, getPost, createPost, updatePost, likePost, commentPost, deletePost } = require('../controllers/postNews-controller');

router.route('/')
    .get(getPost)
    .post(createPost);

router.route('/:id')
    .get(getArticulo)
    .delete(deleteArticulo)
    .put(updateArticulo);

module.exports = router; */
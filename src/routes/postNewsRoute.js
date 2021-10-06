const express = require('express');
const router = express.Router();

const{ getPosts, getPost, createPost, updatePost, likePost, commentPost, deletePost }
= require( '../controllers/postNews-controller.js')


router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
router.post('/:id/commentPost', commentPost);

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
const express = require('express');

const router = express.Router();
const authMiddleware = require('../middleware/auth');

const { signin, signup, signout } = require('../controllers/users-controller');

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/signout', authMiddleware, signout);

module.exports = router;

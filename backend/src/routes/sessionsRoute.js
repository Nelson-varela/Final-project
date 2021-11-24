const express = require('express');

const router = express.Router();
const authMiddleware = require('../middleware/auth');

const { get, getByUser } = require('../controllers/sessions-controller');

router.get('/', authMiddleware, get);
router.get('/:userId', authMiddleware, getByUser);

module.exports = router;

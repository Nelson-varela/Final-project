const express = require('express');
const router = express.Router();

const { getNovelties, getNovelty, createNovelty  } = require('../controllers/novelty-controller.js');


router.get('/',getNovelties);
router.get('/:id', getNovelty);

router.post('/', createNovelty); 
 
 

module.exports = router;
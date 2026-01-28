const express = require('express');
const { getHeader, updateHeader } = require('../controllers/headerController');

const router = express.Router();

router.get('/', getHeader);
router.put('/', updateHeader);

module.exports = router;

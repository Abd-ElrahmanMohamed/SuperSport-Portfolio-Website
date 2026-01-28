const express = require('express');
const { getFooter, updateFooter } = require('../controllers/footerController');

const router = express.Router();

router.get('/', getFooter);
router.put('/', updateFooter);

module.exports = router;

const express = require('express');
const { getNavigation, updateNavigation } = require('../controllers/navigationController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', getNavigation);
router.put('/', authMiddleware, updateNavigation);

module.exports = router;

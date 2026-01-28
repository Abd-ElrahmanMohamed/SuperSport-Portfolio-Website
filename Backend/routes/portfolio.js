const express = require('express');
const {
  getPortfolios,
  addPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
  updateSectionInfo,
} = require('../controllers/portfolioController');

const router = express.Router();

router.get('/', getPortfolios);
router.post('/', addPortfolioItem);
router.put('/section-info', updateSectionInfo);
router.put('/:itemId', updatePortfolioItem);
router.delete('/:itemId', deletePortfolioItem);

module.exports = router;

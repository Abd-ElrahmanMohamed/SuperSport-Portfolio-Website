const express = require('express');
const {
  getServices,
  addService,
  updateService,
  deleteService,
  updateSectionInfo,
} = require('../controllers/serviceController');

const router = express.Router();

router.get('/', getServices);
router.post('/', addService);
router.put('/section-info', updateSectionInfo);
router.put('/:serviceId', updateService);
router.delete('/:serviceId', deleteService);

module.exports = router;

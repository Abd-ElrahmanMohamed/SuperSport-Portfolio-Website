const express = require('express');
const multer = require('multer');
const path = require('path');
const {
  getClients,
  addClient,
  updateClient,
  deleteClient,
  addClientWithUpload,
  updatePartnerInfo,
} = require('../controllers/clientController');

// Configure multer for client logos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/logos/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, 'logo-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  },
});

const router = express.Router();

router.get('/', getClients);
router.post('/', addClient);
router.post('/upload', upload.single('logo'), addClientWithUpload);
router.put('/partner', updatePartnerInfo);
router.put('/:clientId', updateClient);
router.delete('/:clientId', deleteClient);

module.exports = router;

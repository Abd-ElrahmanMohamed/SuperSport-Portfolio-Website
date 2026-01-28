const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema(
  {
    clients: [
      {
        logo: String,
      },
    ],
    partnerTitle: {
      type: String,
      default: 'Become Our Partner',
    },
    partnerDescription: {
      type: String,
      default: 'Join our list of successful clients and partners',
    },
    partnerButtonText: {
      type: String,
      default: 'Contact Us',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Client', clientSchema);

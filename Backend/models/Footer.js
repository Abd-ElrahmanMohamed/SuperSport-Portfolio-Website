const mongoose = require('mongoose');

const footerSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      default: 'A leading company in sports advertising and event management.',
    },
    year: {
      type: Number,
      default: new Date().getFullYear(),
    },
    companyName: {
      type: String,
      default: 'Super Sport Advertising & Events',
    },
    rights: {
      type: String,
      default: 'All Rights Reserved.',
    },
    quickLinks: [
      {
        label: String,
        url: String,
      },
    ],
    contact: {
      email: String,
      phone: String,
      address: String,
    },
    socialLinks: [
      {
        platform: String,
        url: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Footer', footerSchema);

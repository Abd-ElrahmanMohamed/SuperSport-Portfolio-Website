const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      default: 'contact@supersport.com',
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email',
      ],
    },
    emails: [
      {
        type: String,
        default: 'contact@supersport.com',
      },
    ],
    phone: {
      type: String,
      default: '+1 (555) 123-4567',
    },
    phones: [
      {
        type: String,
        default: '+1 (555) 123-4567',
      },
    ],
    sectionTitle: {
      type: String,
      default: 'Contact Us',
    },
    sectionDescription: {
      type: String,
      default: 'Get in touch to learn how we can help you',
    },
    address: {
      type: String,
      default: 'Sports Complex, Cairo, Egypt',
    },
    hours: {
      type: String,
      default: 'Mon - Fri: 9AM - 6PM',
    },
    city: String,
    country: String,
    socialLinks: [
      {
        platform: String,
        url: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);

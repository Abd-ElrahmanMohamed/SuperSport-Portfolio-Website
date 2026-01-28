const mongoose = require('mongoose');

const headerSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      default: '+20 100 090 8280',
    },
    email: {
      type: String,
      default: 'info@supersport.com.eg',
    },
    hours: {
      type: String,
      default: 'Sun - Thurs: 9AM - 5PM',
    },
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Header', headerSchema);

const mongoose = require('mongoose');

const portfolioItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: 'General',
    },
    tags: [String],
    link: String,
    github: String,
  },
  { timestamps: true }
);

const portfolioSchema = new mongoose.Schema(
  {
    sectionTitle: {
      type: String,
      default: 'Our Portfolio',
    },
    sectionDescription: {
      type: String,
      default: 'Showcasing our most prominent projects',
    },
    items: [portfolioItemSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Portfolio', portfolioSchema);

const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default: 'About Me',
    },
    description: {
      type: String,
      required: true,
      default: 'Learn more about who I am and what I do',
    },
    longDescription: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    stats: [
      {
        number: {
          type: String,
          default: '0+',
        },
        label: {
          type: String,
          default: 'Statistic',
        },
      },
    ],
    button1Text: {
      type: String,
      default: 'Our Services',
    },
    button2Text: {
      type: String,
      default: 'Contact Us',
    },
    skills: [
      {
        name: String,
        percentage: Number,
      },
    ],
    experience: [
      {
        title: String,
        company: String,
        duration: String,
        description: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', aboutSchema);

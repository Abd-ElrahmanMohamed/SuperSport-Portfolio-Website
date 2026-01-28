const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema(
  {
    heroTitle: {
      type: String,
      required: true,
      default: 'Welcome to My Portfolio',
    },
    heroDescription: {
      type: String,
      required: true,
      default: 'I am a passionate web developer',
    },
    heroButtonText: {
      type: String,
      default: 'Get Started',
    },
    heroButtonLink: {
      type: String,
      default: '#contact',
    },
    ourWorkButtonText: {
      type: String,
      default: 'Our Work',
    },
    heroImage: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
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
  },
  { timestamps: true }
);

// Set default stats if none provided
homeSchema.pre('save', function (next) {
  if (!this.stats || this.stats.length === 0) {
    this.stats = [
      { number: '18+', label: 'Years Experience' },
      { number: '500+', label: 'Successful Projects' },
      { number: '120+', label: 'Permanent Clients' },
      { number: '50+', label: 'Annual Events' },
    ];
  }
  next();
});

module.exports = mongoose.model('Home', homeSchema);

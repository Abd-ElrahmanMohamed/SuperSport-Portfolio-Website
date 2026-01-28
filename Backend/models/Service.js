const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    sectionTitle: {
      type: String,
      default: 'Our Services',
    },
    sectionDescription: {
      type: String,
      default: 'We offer a comprehensive range of marketing and sports services',
    },
    buttonText: {
      type: String,
      default: 'Request a Service',
    },
    services: [
      {
        icon: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const defaultServices = [
  {
    icon: '📢',
    title: 'Sports Advertising',
    description:
      'Customized advertising campaigns for sports activities and events, focusing on targeting sports audiences with high efficiency.',
  },
  {
    icon: '📅',
    title: 'Event Management',
    description:
      'Complete organization and management of sports events from matches and championships to conferences and sports parties.',
  },
  {
    icon: '👥',
    title: 'Sports Marketing',
    description:
      'Innovative marketing strategies to enhance brands through sports partnerships and sponsorships.',
  },
  {
    icon: '📺',
    title: 'TV Production',
    description:
      'Production of high-quality sports programs and reports for TV channels and digital platforms.',
  },
  {
    icon: '📡',
    title: 'Live Broadcasting',
    description:
      'Live broadcasting services for sports events of all kinds with the highest technical quality standards.',
  },
  {
    icon: '📊',
    title: 'Sports Analytics',
    description:
      'Studies and analysis of the sports market to help clients make informed marketing decisions.',
  },
];

// Set default services before save if empty
serviceSchema.pre('save', function (next) {
  if (!this.services || this.services.length === 0) {
    this.services = JSON.parse(JSON.stringify(defaultServices));
  }
  next();
});

module.exports = mongoose.model('Service', serviceSchema);

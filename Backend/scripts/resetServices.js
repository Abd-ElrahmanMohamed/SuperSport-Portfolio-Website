// backend/scripts/resetServices.js
// This script resets the services collection with the default 6 services

const mongoose = require('mongoose');
require('dotenv').config();

const Service = require('../models/Service');

async function resetServices() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio-admin');
    console.log('Connected to MongoDB');

    // Delete existing services collection
    await Service.deleteMany({});
    console.log('Deleted existing services');

    // Create new document with default services
    const newServices = await Service.create({
      services: [
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
      ],
    });

    console.log('✅ Services reset successfully!');
    console.log('Services:', JSON.stringify(newServices, null, 2));

    // Close connection
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

resetServices();

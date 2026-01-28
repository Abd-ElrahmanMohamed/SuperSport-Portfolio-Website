const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const seedAdminUser = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio-admin';

    // Connect to MongoDB
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ email: 'admin@example.com' });

    if (existingAdmin) {
      console.log('Admin user already exists. Skipping creation.');
      await mongoose.disconnect();
      return;
    }

    // Create admin user
    const adminUser = await User.create({
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin123456',
      role: 'admin',
      isActive: true,
    });

    console.log('✓ Admin user created successfully!');
    console.log('Email: admin@example.com');
    console.log('Password: admin123456');
    console.log('Role: admin');

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding admin user:', error.message);
    process.exit(1);
  }
};

// Run the seed script
seedAdminUser();

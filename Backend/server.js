require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/logos/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images are allowed.'));
    }
  },
});

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:4200',
    credentials: true,
  }),
);

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/home', require('./routes/home'));
app.use('/api/about', require('./routes/about'));
app.use('/api/services', require('./routes/services'));
app.use('/api/portfolio', require('./routes/portfolio'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/clients', require('./routes/clients'));
app.use('/api/header', require('./routes/header'));
app.use('/api/footer', require('./routes/footer'));

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start server
let PORT = process.env.PORT || 5000;
const DEFAULT_PORT = PORT;
const MAX_PORT_ATTEMPTS = 10;

const isPortAvailable = (port) => {
  return new Promise((resolve) => {
    const server = require('http').createServer();
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false);
      } else {
        resolve(false);
      }
    });
    server.once('listening', () => {
      server.close();
      resolve(true);
    });
    server.listen(port);
  });
};

const startServer = async () => {
  try {
    // Connect to database
    await connectDB();

    // Find available port
    let attempts = 0;
    while (attempts < MAX_PORT_ATTEMPTS) {
      const available = await isPortAvailable(PORT);
      if (available) {
        break;
      }
      console.log(`⚠️  Port ${PORT} is in use, trying port ${PORT + 1}...`);
      PORT++;
      attempts++;
    }

    if (attempts === MAX_PORT_ATTEMPTS) {
      console.error(
        `\n❌ ERROR: Could not find an available port after ${MAX_PORT_ATTEMPTS} attempts starting from port ${DEFAULT_PORT}\n`,
      );
      process.exit(1);
    }

    // Start listening
    const server = app.listen(PORT, () => {
      if (PORT !== DEFAULT_PORT) {
        console.log(`✅ Server running on port ${PORT} (original port ${DEFAULT_PORT} was in use)`);
      } else {
        console.log(`✅ Server running on port ${PORT}`);
      }
    });

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.error(
          `\n❌ ERROR: Port ${PORT} is already in use!\n` +
            `\nFix:\n` +
            `1. Kill the process using port ${PORT}:\n` +
            `   Windows: taskkill /PID [PID] /F\n` +
            `   Or find it: netstat -ano | findstr :${PORT}\n\n` +
            `2. Or use a different port in .env\n` +
            `   Change: PORT=${PORT}\n` +
            `   To: PORT=3000\n`,
        );
      } else {
        console.error(`Server error: ${error.message}`);
      }
      process.exit(1);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();

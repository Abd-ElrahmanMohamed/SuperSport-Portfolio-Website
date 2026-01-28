<h1 align="center">🎨 SuperSport Portfolio Website</h1>

<p align="center">
  <strong>A Full-Stack Modern Portfolio Web Application</strong><br>
  Built with <strong>Angular 20</strong> Frontend & <strong>Node.js/Express</strong> Backend
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-20.3.0-red?logo=angular" alt="Angular">
  <img src="https://img.shields.io/badge/Node.js-18+-green?logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-7.5.0-green?logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/Express-4.18-yellow?logo=express" alt="Express">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License">
</p>

<hr>

---

<h2>📌 Project Overview</h2>

<p>
  <strong>SuperSport Portfolio</strong> is a professional, full-stack web application designed to showcase 
  personal information, projects, services, and clients. The application features a modern public-facing 
  website combined with a powerful admin dashboard for content management.
</p>

<p>
  This project demonstrates industry best practices in <strong>clean architecture</strong>, <strong>modular design</strong>, 
  and <strong>full-stack development</strong> using modern technologies.
</p>

<h3>🎯 Perfect For:</h3>
<ul>
  <li>✅ Personal Portfolios & Resumes</li>
  <li>✅ Freelancer Websites</li>
  <li>✅ Agency Showcases</li>
  <li>✅ Professional Portfolios</li>
  <li>✅ Content Management Systems</li>
  <li>✅ Learning Full-Stack Development</li>
</ul>

<hr>

---

<h2>✨ Key Features</h2>

<h3>🌐 Public Website</h3>
<ul>
  <li>📱 <strong>Responsive Design</strong> – Mobile-first approach</li>
  <li>🏠 <strong>Home Page</strong> – Professional introduction</li>
  <li>👤 <strong>About Section</strong> – Personal & professional information</li>
  <li>🛠️ <strong>Services Listing</strong> – Showcase your expertise</li>
  <li>🎨 <strong>Portfolio Showcase</strong> – Display projects with details</li>
  <li>🤝 <strong>Clients Section</strong> – Logos & testimonials</li>
  <li>📧 <strong>Contact Page</strong> – Easy communication channel</li>
  <li>📍 <strong>Shared Components</strong> – Consistent Header & Footer</li>
</ul>

<h3>🔐 Admin Dashboard</h3>
<ul>
  <li>🔑 <strong>Secure Admin Login</strong> – JWT Authentication</li>
  <li>✏️ <strong>Content Editors</strong> – Edit all sections easily</li>
  <li>➕ <strong>Full CRUD Operations</strong> – Create, Read, Update, Delete</li>
  <li>🏠 <strong>Home Editor</strong> – Manage landing page</li>
  <li>👥 <strong>About Editor</strong> – Update personal information</li>
  <li>🛠️ <strong>Services Management</strong> – Add/Edit/Delete services</li>
  <li>🎨 <strong>Portfolio Management</strong> – Manage projects</li>
  <li>👔 <strong>Clients Management</strong> – Add client logos & info</li>
  <li>📧 <strong>Contact Editor</strong> – Update contact details</li>
  <li>🖼️ <strong>Image Upload</strong> – File management with Multer</li>
  <li>🎨 <strong>Modern UI</strong> – Sidebar navigation & responsive layout</li>
  <li>⚡ <strong>Real-time Updates</strong> – Instant content synchronization</li>
</ul>

<hr>

---

<h2>🏗️ Project Architecture</h2>

<h3>System Architecture</h3>

<pre>
┌─────────────────────────────────────────────────────────────┐
│                     SuperSport Portfolio                     │
└─────────────────────────────────────────────────────────────┘
         │                                              │
         ▼                                              ▼
    ┌──────────────┐                        ┌──────────────────┐
    │   Frontend   │                        │   Backend API    │
    │  (Angular)   │                        │   (Node/Express) │
    └──────────────┘                        └──────────────────┘
         │                                         │
    ┌────┴────┐                               ┌────┴────┐
    ▼         ▼                               ▼         ▼
 Public    Admin                          Routes    Controllers
 Pages    Dashboard                        │          │
          │                                ▼         │
          └──────────────────────────►  MongoDB ◄────┘
</pre>

<h3>Frontend Architecture</h3>

<pre>
src/
├── app/
│   ├── app.ts (Root Component)
│   ├── app.routes.ts (Routing Configuration)
│   ├── app.config.ts (App Configuration)
│   │
│   ├── layout/ (Public Pages)
│   │   ├── home/
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── clients/
│   │   ├── contact/
│   │   └── shared/ (Header, Footer, Navigation)
│   │
│   ├── dashboard/ (Admin Panel)
│   │   ├── auth/ (Login)
│   │   ├── admin/ (Dashboard Main)
│   │   │   ├── home-editor/
│   │   │   ├── about-editor/
│   │   │   ├── services-editor/
│   │   │   ├── portfolio-editor/
│   │   │   ├── clients-editor/
│   │   │   ├── contact-editor/
│   │   │   └── shared/ (Sidebar)
│   │
│   ├── services/ (API Communication)
│   │   ├── admin.service.ts
│   │   ├── auth.service.ts
│   │   └── others...
│   │
│   ├── guards/ (Route Protection)
│   │   └── auth.guard.ts
│   │
│   └── interceptors/ (HTTP Interceptors)
│       └── auth.interceptor.ts
│
├── main.ts (Bootstrap)
├── index.html (Main Template)
└── styles.css (Global Styles)
</pre>

<h3>Backend Architecture (MVC Pattern)</h3>

<pre>
Backend/
├── config/
│   └── db.js (Database Connection)
│
├── models/ (Data Models)
│   ├── About.js
│   ├── Home.js
│   ├── Service.js
│   ├── Portfolio.js
│   ├── Client.js
│   ├── Contact.js
│   ├── Header.js
│   ├── Footer.js
│   ├── Navigation.js
│   └── User.js
│
├── controllers/ (Business Logic)
│   ├── aboutController.js
│   ├── homeController.js
│   ├── serviceController.js
│   ├── portfolioController.js
│   ├── clientController.js
│   ├── contactController.js
│   ├── authController.js
│   └── others...
│
├── routes/ (API Endpoints)
│   ├── about.js
│   ├── home.js
│   ├── services.js
│   ├── portfolio.js
│   ├── clients.js
│   ├── contact.js
│   ├── auth.js
│   └── others...
│
├── middleware/ (Custom Middleware)
│   ├── auth.js (Authentication)
│   └── adminOnly.js (Authorization)
│
├── uploads/ (File Storage)
│   └── logos/
│
├── scripts/ (Utility Scripts)
│   ├── seedAdmin.js (Create admin user)
│   └── resetServices.js (Reset data)
│
├── server.js (Express Server)
├── package.json
└── README.md
</pre>

<hr>

---

<h2>🛠️ Technology Stack</h2>

<h3>🎨 Frontend Stack</h3>
<table>
  <tr>
    <td><strong>Framework</strong></td>
    <td>Angular 20.3.0</td>
  </tr>
  <tr>
    <td><strong>Language</strong></td>
    <td>TypeScript 5.9</td>
  </tr>
  <tr>
    <td><strong>UI Framework</strong></td>
    <td>Bootstrap 5</td>
  </tr>
  <tr>
    <td><strong>Icons</strong></td>
    <td>Font Awesome 7</td>
  </tr>
  <tr>
    <td><strong>HTTP Client</strong></td>
    <td>Angular HttpClientModule</td>
  </tr>
  <tr>
    <td><strong>Reactive Programming</strong></td>
    <td>RxJS 7.8</td>
  </tr>
  <tr>
    <td><strong>Testing</strong></td>
    <td>Jasmine & Karma</td>
  </tr>
  <tr>
    <td><strong>Build Tool</strong></td>
    <td>Angular CLI 20</td>
  </tr>
</table>

<h3>🔧 Backend Stack</h3>
<table>
  <tr>
    <td><strong>Runtime</strong></td>
    <td>Node.js 18+</td>
  </tr>
  <tr>
    <td><strong>Framework</strong></td>
    <td>Express.js 4.18</td>
  </tr>
  <tr>
    <td><strong>Database</strong></td>
    <td>MongoDB 7.5</td>
  </tr>
  <tr>
    <td><strong>ODM</strong></td>
    <td>Mongoose</td>
  </tr>
  <tr>
    <td><strong>Authentication</strong></td>
    <td>JWT (jsonwebtoken)</td>
  </tr>
  <tr>
    <td><strong>Password Hashing</strong></td>
    <td>bcryptjs</td>
  </tr>
  <tr>
    <td><strong>File Upload</strong></td>
    <td>Multer</td>
  </tr>
  <tr>
    <td><strong>CORS</strong></td>
    <td>CORS Middleware</td>
  </tr>
  <tr>
    <td><strong>Validation</strong></td>
    <td>express-validator</td>
  </tr>
  <tr>
    <td><strong>Environment Variables</strong></td>
    <td>dotenv</td>
  </tr>
  <tr>
    <td><strong>Dev Tool</strong></td>
    <td>Nodemon (auto-reload)</td>
  </tr>
</table>

<h3>📊 Development Tools</h3>
<ul>
  <li>Git & GitHub</li>
  <li>npm Package Manager</li>
  <li>VS Code</li>
  <li>Postman (API Testing)</li>
</ul>

<hr>

---

<h2>📂 Project Structure</h2>

<pre>
SuperSport-Portfolio-Website/
├── Frontend/ (Angular Application)
│   ├── src/
│   │   ├── app/
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.css
│   ├── angular.json
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
├── Backend/ (Node.js/Express API)
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── scripts/
│   ├── server.js
│   ├── package.json
│   ├── nodemon.json
│   └── README.md
│
├── README_COMPLETE.md (This file)
└── .env (Configuration - Not in repo)
</pre>

<hr>

---

<h2>🚀 Installation & Setup</h2>

<h3>📋 Prerequisites</h3>
<ul>
  <li>✅ Node.js 18+ installed</li>
  <li>✅ npm 9+ or yarn installed</li>
  <li>✅ MongoDB 7.5+ (local or cloud)</li>
  <li>✅ Git installed</li>
  <li>✅ A code editor (VS Code recommended)</li>
</ul>

<h3>🔽 Clone Repository</h3>
<pre>
git clone https://github.com/your-username/SuperSport-Portfolio-Website.git
cd SuperSport-Portfolio-Website
</pre>

<h3>📦 Frontend Setup</h3>

<h4>Step 1: Install Dependencies</h4>
<pre>
cd Frontend
npm install
</pre>

<h4>Step 2: Start Development Server</h4>
<pre>
npm start
</pre>

<p>
  <strong>Frontend runs at:</strong> <code>http://localhost:4200</code>
</p>

<h4>Available Commands</h4>
<pre>
npm start              # Start dev server
npm run build          # Build for production
npm run watch          # Build in watch mode
npm test               # Run tests
ng serve               # Alternative to npm start
ng build --configuration production
</pre>

<h3>🔧 Backend Setup</h3>

<h4>Step 1: Navigate to Backend</h4>
<pre>
cd Backend
</pre>

<h4>Step 2: Install Dependencies</h4>
<pre>
npm install
</pre>

<h4>Step 3: Configure Environment Variables</h4>

<p>Create a <code>.env</code> file in the Backend directory:</p>

<pre>
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/supersport-portfolio
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/supersport-portfolio

# Server Configuration
PORT=5000
NODE_ENV=development

# Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# CORS Configuration
CORS_ORIGIN=http://localhost:4200

# File Upload
MAX_FILE_SIZE=5242880  # 5MB in bytes
</pre>

<h4>Step 4: Seed Admin User (Optional)</h4>
<pre>
node scripts/seedAdmin.js
</pre>

<p><strong>Default Admin Credentials:</strong></p>
<pre>
Email: admin@example.com
Password: password123
</pre>

<h4>Step 5: Start Backend Server</h4>
<pre>
npm start
</pre>

<p>
  <strong>Backend runs at:</strong> <code>http://localhost:5000</code>
</p>

<p><strong>API Base URL:</strong> <code>http://localhost:5000/api</code></p>

<h4>Available Commands</h4>
<pre>
npm start             # Start with nodemon (auto-reload)
node server.js        # Direct start
</pre>

<hr>

---

<h2>🌐 API Endpoints Documentation</h2>

<h3>🔑 Authentication</h3>
<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
    <th>Auth Required</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/auth/register</td>
    <td>Register new user</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/auth/login</td>
    <td>User login</td>
    <td>❌ No</td>
  </tr>
</table>

<h3>🏠 Home Module</h3>
<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
    <th>Auth Required</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/home</td>
    <td>Get home page content</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/api/home/:id</td>
    <td>Update home content</td>
    <td>✅ Yes (Admin)</td>
  </tr>
</table>

<h3>👤 About Module</h3>
<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
    <th>Auth Required</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/about</td>
    <td>Get about section</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/api/about/:id</td>
    <td>Update about section</td>
    <td>✅ Yes (Admin)</td>
  </tr>
</table>

<h3>🛠️ Services Module</h3>
<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
    <th>Auth Required</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/services</td>
    <td>Get all services</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/services</td>
    <td>Create new service</td>
    <td>✅ Yes (Admin)</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/services/:id</td>
    <td>Get service by ID</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/api/services/:id</td>
    <td>Update service</td>
    <td>✅ Yes (Admin)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/api/services/:id</td>
    <td>Delete service</td>
    <td>✅ Yes (Admin)</td>
  </tr>
</table>

<h3>🎨 Portfolio Module</h3>
<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
    <th>Auth Required</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/portfolio</td>
    <td>Get all projects</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/portfolio</td>
    <td>Create new project</td>
    <td>✅ Yes (Admin)</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/portfolio/:id</td>
    <td>Get project by ID</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/api/portfolio/:id</td>
    <td>Update project</td>
    <td>✅ Yes (Admin)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/api/portfolio/:id</td>
    <td>Delete project</td>
    <td>✅ Yes (Admin)</td>
  </tr>
</table>

<h3>🤝 Clients Module</h3>
<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
    <th>Auth Required</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/clients</td>
    <td>Get all clients</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/clients</td>
    <td>Create new client</td>
    <td>✅ Yes (Admin)</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/clients/:id</td>
    <td>Get client by ID</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/api/clients/:id</td>
    <td>Update client</td>
    <td>✅ Yes (Admin)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/api/clients/:id</td>
    <td>Delete client</td>
    <td>✅ Yes (Admin)</td>
  </tr>
</table>

<h3>📧 Contact Module</h3>
<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
    <th>Auth Required</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/contact</td>
    <td>Get contact information</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/contact</td>
    <td>Submit contact form</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/api/contact/:id</td>
    <td>Update contact info</td>
    <td>✅ Yes (Admin)</td>
  </tr>
</table>

<hr>

---

<h2>📍 URL Routes & Navigation</h2>

<h3>🌐 Public Routes</h3>
<table>
  <tr>
    <th>Route</th>
    <th>Component</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>/</td>
    <td>Home</td>
    <td>Landing page</td>
  </tr>
  <tr>
    <td>/home</td>
    <td>Home</td>
    <td>Main page</td>
  </tr>
  <tr>
    <td>/about</td>
    <td>About</td>
    <td>About section</td>
  </tr>
  <tr>
    <td>/services</td>
    <td>Services</td>
    <td>Services listing</td>
  </tr>
  <tr>
    <td>/portfolio</td>
    <td>Portfolio</td>
    <td>Projects showcase</td>
  </tr>
  <tr>
    <td>/clients</td>
    <td>Clients</td>
    <td>Clients section</td>
  </tr>
  <tr>
    <td>/contact</td>
    <td>Contact</td>
    <td>Contact form</td>
  </tr>
</table>

<h3>🔐 Admin Routes (Protected)</h3>
<table>
  <tr>
    <th>Route</th>
    <th>Component</th>
    <th>Purpose</th>
    <th>Auth Required</th>
  </tr>
  <tr>
    <td>/admin</td>
    <td>Redirect</td>
    <td>Redirects to login</td>
    <td>✅ Yes</td>
  </tr>
  <tr>
    <td>/admin/login</td>
    <td>Login</td>
    <td>Admin login page</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <td>/admin/dashboard</td>
    <td>Admin Dashboard</td>
    <td>Main dashboard</td>
    <td>✅ Yes</td>
  </tr>
  <tr>
    <td>/admin/home</td>
    <td>Home Editor</td>
    <td>Edit home content</td>
    <td>✅ Yes</td>
  </tr>
  <tr>
    <td>/admin/about</td>
    <td>About Editor</td>
    <td>Edit about section</td>
    <td>✅ Yes</td>
  </tr>
  <tr>
    <td>/admin/services</td>
    <td>Services Editor</td>
    <td>Manage services</td>
    <td>✅ Yes</td>
  </tr>
  <tr>
    <td>/admin/portfolio</td>
    <td>Portfolio Editor</td>
    <td>Manage projects</td>
    <td>✅ Yes</td>
  </tr>
  <tr>
    <td>/admin/clients</td>
    <td>Clients Editor</td>
    <td>Manage clients</td>
    <td>✅ Yes</td>
  </tr>
  <tr>
    <td>/admin/contact</td>
    <td>Contact Editor</td>
    <td>Edit contact info</td>
    <td>✅ Yes</td>
  </tr>
</table>

<hr>

---

<h2>🧪 Testing</h2>

<h3>Frontend Testing</h3>

<p>Run unit tests:</p>
<pre>
npm test
</pre>

<p>Tests are configured with:</p>
<ul>
  <li>Jasmine (Testing Framework)</li>
  <li>Karma (Test Runner)</li>
  <li>Chrome Browser</li>
</ul>

<h3>Backend API Testing</h3>

<p>Use Postman to test API endpoints:</p>
<ul>
  <li>Import <code>Backend/POSTMAN_COLLECTION.json</code> into Postman</li>
  <li>Test all CRUD operations</li>
  <li>Verify authentication & authorization</li>
</ul>

<h3>Manual Testing Checklist</h3>
<ul>
  <li>✅ Public pages load correctly</li>
  <li>✅ Admin login works</li>
  <li>✅ CRUD operations function properly</li>
  <li>✅ File uploads work</li>
  <li>✅ Responsive design on mobile</li>
  <li>✅ Error handling displays correctly</li>
</ul>

<hr>

---

<h2>🔒 Security Features</h2>

<h3>✅ Implemented</h3>
<ul>
  <li>✅ <strong>JWT Authentication</strong> – Secure token-based auth</li>
  <li>✅ <strong>Password Hashing</strong> – bcryptjs for secure storage</li>
  <li>✅ <strong>Role-Based Access Control</strong> – Admin-only endpoints</li>
  <li>✅ <strong>CORS Protection</strong> – Configurable origins</li>
  <li>✅ <strong>Auth Guard</strong> – Frontend route protection</li>
  <li>✅ <strong>Input Validation</strong> – express-validator on backend</li>
  <li>✅ <strong>HTTP Interceptor</strong> – Auto token injection</li>
</ul>

<h3>⚠️ Production Considerations</h3>
<ul>
  <li>🔒 Use HTTPS in production</li>
  <li>🔒 Store JWT_SECRET in secure vault</li>
  <li>🔒 Enable MongoDB authentication</li>
  <li>🔒 Use environment-specific configurations</li>
  <li>🔒 Implement rate limiting</li>
  <li>🔒 Add request logging</li>
  <li>🔒 Enable CORS properly for production domain</li>
</ul>

<hr>

---

<h2>📦 Production Build & Deployment</h2>

<h3>Frontend Build</h3>

<p>Create optimized production build:</p>
<pre>
cd Frontend
npm run build -- --configuration production
</pre>

<p>Build output location:</p>
<pre>
dist/portfolio/
</pre>

<h3>Deployment Options</h3>

<h4>Option 1: Vercel</h4>
<pre>
npm install -g vercel
cd Frontend
vercel --prod
</pre>

<h4>Option 2: Netlify</h4>
<pre>
npm install -g netlify-cli
cd Frontend
netlify deploy --prod --dir=dist/portfolio
</pre>

<h4>Option 3: AWS S3 + CloudFront</h4>
<pre>
# Build the application
npm run build -- --configuration production

# Deploy to S3

aws s3 sync dist/portfolio/ s3://your-bucket-name --delete

</pre>

<h4>Option 4: GitHub Pages</h4>
<pre>
npm run build -- --configuration production
# Deploy dist/portfolio to gh-pages branch
</pre>

<h3>Backend Deployment</h3>

<h4>Option 1: Heroku</h4>
<pre>
heroku login
heroku create your-app-name
heroku config:set JWT_SECRET=your_secret_key
git push heroku main
</pre>

<h4>Option 2: Railway</h4>
<pre>
# Connect repository and configure environment variables
# Automatic deployment on push
</pre>

<h4>Option 3: DigitalOcean App Platform</h4>
<pre>
# Connect GitHub repository
# Configure environment variables
# Deploy automatically
</pre>

<hr>

---

<h2>🚀 Running in Development</h2>

<h3>Terminal 1 - Start Backend</h3>
<pre>
cd Backend
npm start
# Server runs on: http://localhost:5000
</pre>

<h3>Terminal 2 - Start Frontend</h3>
<pre>
cd Frontend
npm start
# Application runs on: http://localhost:4200
</pre>

<h3>Terminal 3 - MongoDB (if local)</h3>
<pre>
mongod
# MongoDB runs on: mongodb://localhost:27017
</pre>

<p><strong>Now you have the complete application running locally!</strong></p>

<hr>

---

<h2>📚 Project Documentation</h2>

<ul>
  <li>📄 <strong>Frontend README:</strong> <code>Frontend/README.md</code></li>
  <li>📄 <strong>Backend README:</strong> <code>Backend/README.md</code></li>
  <li>📄 <strong>API Collection:</strong> <code>Backend/POSTMAN_COLLECTION.json</code></li>
  <li>⚙️ <strong>Angular Config:</strong> <code>angular.json</code></li>
  <li>⚙️ <strong>TypeScript Config:</strong> <code>tsconfig.json</code></li>
</ul>

<hr>

---

<h2>🤝 Contributing</h2>

<p>Contributions are welcome! Please follow these steps:</p>

<ol>
  <li>Fork the repository</li>
  <li>Create a feature branch (<code>git checkout -b feature/amazing-feature</code>)</li>
  <li>Commit your changes (<code>git commit -m 'Add amazing feature'</code>)</li>
  <li>Push to the branch (<code>git push origin feature/amazing-feature</code>)</li>
  <li>Open a Pull Request</li>
</ol>

<h3>Coding Standards</h3>
<ul>
  <li>Follow Angular Style Guide</li>
  <li>Use TypeScript strict mode</li>
  <li>Write meaningful commit messages</li>
  <li>Comment complex logic</li>
  <li>Test your changes</li>
</ul>

<hr>

---

<h2>🐛 Troubleshooting</h2>

<h3>Frontend Issues</h3>

<h4>Port 4200 Already in Use</h4>
<pre>
ng serve --port 4300
</pre>

<h4>Node Modules Issues</h4>
<pre>
rm -rf node_modules package-lock.json
npm install
</pre>

<h4>Angular CLI Not Found</h4>
<pre>
npm install -g @angular/cli
</pre>

<h3>Backend Issues</h3>

<h4>Port 5000 Already in Use</h4>
<pre>
# Windows
netstat -ano | findstr :5000
taskkill /PID &lt;PID&gt; /F

# Mac/Linux

lsof -ti:5000 | xargs kill -9

</pre>

<h4>MongoDB Connection Error</h4>
<pre>
# Verify MongoDB is running
# Check MONGODB_URI in .env file
# Make sure database credentials are correct
</pre>

<h4>JWT Token Expired</h4>
<pre>
# Login again to get new token
# Check JWT_SECRET configuration
</pre>

<h3>CORS Errors</h3>

<p>If you see CORS errors:</p>
<ol>
  <li>Verify <code>CORS_ORIGIN</code> in Backend <code>.env</code></li>
  <li>Check frontend API URL matches backend</li>
  <li>Ensure backend is running</li>
</ol>

<hr>

---

<h2>📊 Project Statistics</h2>

<table>
  <tr>
    <td><strong>Frontend Components</strong></td>
    <td>12+</td>
  </tr>
  <tr>
    <td><strong>Backend Controllers</strong></td>
    <td>9</td>
  </tr>
  <tr>
    <td><strong>API Endpoints</strong></td>
    <td>20+</td>
  </tr>
  <tr>
    <td><strong>Database Models</strong></td>
    <td>10</td>
  </tr>
  <tr>
    <td><strong>Routes</strong></td>
    <td>15+</td>
  </tr>
  <tr>
    <td><strong>Services</strong></td>
    <td>Multiple</td>
  </tr>
</table>

<hr>

---

<h2>📝 License</h2>

<p>
  This project is licensed under the <strong>MIT License</strong>.
  See <code>LICENSE</code> file for details.
</p>

<pre>
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, and/or sell copies of the
Software...
</pre>

<hr>

---

<h2>📞 Contact & Support</h2>

<p>
  For questions, issues, or suggestions:
</p>

<table>
  <tr>
    <td><strong>GitHub Issues</strong></td>
    <td><a href="#">Open an issue</a></td>
  </tr>
  <tr>
    <td><strong>Email</strong></td>
    <td>your-email@example.com</td>
  </tr>
  <tr>
    <td><strong>LinkedIn</strong></td>
    <td><a href="#">Your Profile</a></td>
  </tr>
</table>

<hr>

---

<h2>🙏 Acknowledgments</h2>

<ul>
  <li>❤️ Built with Angular & Node.js</li>
  <li>❤️ Styled with Bootstrap & CSS</li>
  <li>❤️ Powered by MongoDB</li>
  <li>❤️ Thanks to the community</li>
</ul>

<hr>

---

<h2>📌 Quick Links</h2>

<ul>
  <li><a href="http://localhost:4200">🌐 Frontend (Local)</a></li>
  <li><a href="http://localhost:4200/admin/login">🔐 Admin Panel (Local)</a></li>
  <li><a href="http://localhost:5000">🔧 Backend API (Local)</a></li>
  <li><a href="https://angular.io">📖 Angular Documentation</a></li>
  <li><a href="https://expressjs.com">📖 Express Documentation</a></li>
  <li><a href="https://docs.mongodb.com">📖 MongoDB Documentation</a></li>
</ul>

<hr>

---

<div align="center">

<h3>⭐ If you found this project helpful, please consider giving it a star!</h3>

<p>
  <strong>Made with ❤️ by Your Name</strong><br>
  Last Updated: January 2026<br>
  Version: 1.0.0
</p>

<p>
  <strong>🚀 Happy Coding! 🚀</strong>
</p>

</div>

<hr>

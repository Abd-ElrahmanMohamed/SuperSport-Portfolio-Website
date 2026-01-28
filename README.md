<h1 align="center">🎨 SuperSport Portfolio Website</h1>

<p align="center">
  <strong>Professional Portfolio Website for SuperSport Company</strong><br>
  My First Freelance Project as a Full-Stack Developer
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-20.3.0-red?logo=angular" alt="Angular">
  <img src="https://img.shields.io/badge/Node.js-18+-green?logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-7.5.0-green?logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/Express-4.18-yellow?logo=express" alt="Express">
  <img src="https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap" alt="Bootstrap">
</p>

<hr>

---

<h2>📌 About This Project</h2>

<p>
  SuperSport Portfolio is a professional web application built for SuperSport company to showcase their services, 
  projects, and clients. This is my first freelance project where I developed a complete full-stack solution.
</p>

<p>
  The project includes a beautiful public website for visitors and a powerful admin dashboard 
  for the company to manage all their content easily.
</p>

<hr>

---

<h2>✨ Features</h2>

<h3>🌐 Public Website</h3>
<ul>
  <li><strong>Home Page</strong> - Eye-catching landing page with company introduction</li>
  <li><strong>About Section</strong> - Information about the company and team</li>
  <li><strong>Services</strong> - Display all services offered by SuperSport</li>
  <li><strong>Portfolio</strong> - Showcase of completed projects</li>
  <li><strong>Clients</strong> - Display company logos and client information</li>
  <li><strong>Contact Page</strong> - Easy way for visitors to contact the company</li>
  <li><strong>Responsive Design</strong> - Works perfectly on all devices (desktop, tablet, mobile)</li>
  <li><strong>Professional Header & Footer</strong> - Consistent branding across all pages</li>
</ul>

<h3>🔐 Admin Dashboard</h3>
<ul>
  <li><strong>Secure Login</strong> - Admin authentication with JWT tokens</li>
  <li><strong>Easy Content Management</strong> - Edit all website content from one place</li>
  <li><strong>Services Manager</strong> - Add, edit, or delete services</li>
  <li><strong>Portfolio Manager</strong> - Manage projects and display them on the website</li>
  <li><strong>Clients Manager</strong> - Upload client logos and information</li>
  <li><strong>Image Upload</strong> - Easy file upload for images and logos</li>
  <li><strong>Contact Information Editor</strong> - Update company contact details</li>
  <li><strong>Real-time Updates</strong> - Changes appear immediately on the website</li>
</ul>

<hr>

---

<h2>🛠️ Technology Stack</h2>

<h3>Frontend</h3>
<ul>
  <li><strong>Angular 20</strong> - Modern frontend framework</li>
  <li><strong>TypeScript</strong> - Type-safe JavaScript</li>
  <li><strong>Bootstrap 5</strong> - Responsive UI framework</li>
  <li><strong>Font Awesome</strong> - Beautiful icons</li>
  <li><strong>RxJS</strong> - Reactive programming library</li>
</ul>

<h3>Backend</h3>
<ul>
  <li><strong>Node.js</strong> - JavaScript runtime</li>
  <li><strong>Express.js</strong> - Web application framework</li>
  <li><strong>MongoDB</strong> - NoSQL database</li>
  <li><strong>Mongoose</strong> - MongoDB object modeling</li>
  <li><strong>JWT</strong> - Secure authentication</li>
  <li><strong>Multer</strong> - File upload handling</li>
</ul>

<h3>Tools & Services</h3>
<ul>
  <li><strong>Git/GitHub</strong> - Version control</li>
  <li><strong>Angular CLI</strong> - Development tool</li>
  <li><strong>Nodemon</strong> - Auto-reload for development</li>
  <li><strong>Postman</strong> - API testing</li>
</ul>

<hr>

---

<h2>� How to Run the Project</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js 18 or higher</li>
  <li>MongoDB (local or MongoDB Atlas cloud)</li>
  <li>Git</li>
</ul>

<h3>Step 1: Clone the Repository</h3>
<pre>
git clone https://github.com/your-username/SuperSport-Portfolio-Website.git
cd SuperSport-Portfolio-Website
</pre>

<h3>Step 2: Setup Backend</h3>
<pre>
cd Backend
npm install
</pre>

<p><strong>Create .env file in Backend folder:</strong></p>
<pre>
MONGODB_URI=mongodb://localhost:27017/supersport-portfolio
PORT=5000
JWT_SECRET=your_secret_key_here
CORS_ORIGIN=http://localhost:4200
</pre>

<p><strong>Start the backend server:</strong></p>
<pre>
npm start
</pre>

<p>Backend will run on: <code>http://localhost:5000</code></p>

<h3>Step 3: Setup Frontend</h3>
<pre>
cd Frontend
npm install
npm start
</pre>

<p>Frontend will run on: <code>http://localhost:4200</code></p>

<h3>Step 4: Access the Application</h3>
<ul>
  <li><strong>Public Website:</strong> http://localhost:4200</li>
  <li><strong>Admin Panel:</strong> http://localhost:4200/admin/login</li>
</ul>

<h3>Admin Login Credentials (Default)</h3>
<pre>
Email: admin@example.com
Password: password123
</pre>

<hr>

---

<h2>📂 Project Structure</h2>

<pre>
SuperSport-Portfolio-Website/
│
├── Frontend/               (Angular Application)
│   ├── src/
│   │   ├── app/           (Components & Services)
│   │   ├── index.html
│   │   └── main.ts
│   ├── angular.json
│   └── package.json
│
├── Backend/                (Node.js/Express API)
│   ├── config/            (Database config)
│   ├── controllers/       (Business logic)
│   ├── models/            (Data models)
│   ├── routes/            (API endpoints)
│   ├── middleware/        (Authentication)
│   ├── uploads/           (File storage)
│   ├── server.js
│   └── package.json
│
└── README.md              (This file)
</pre>

<hr>

---

<h2>� Available Pages</h2>

<h3>Public Website</h3>
<ul>
  <li><strong>Home</strong> - Company introduction and main content</li>
  <li><strong>About</strong> - Company background and information</li>
  <li><strong>Services</strong> - All services offered by SuperSport</li>
  <li><strong>Portfolio</strong> - Showcase of completed projects</li>
  <li><strong>Clients</strong> - Companies that work with SuperSport</li>
  <li><strong>Contact</strong> - Contact form and company info</li>
</ul>

<h3>Admin Panel (Protected with Login)</h3>
<ul>
  <li><strong>Admin Login</strong> - Sign in to admin panel</li>
  <li><strong>Edit Home</strong> - Modify home page content</li>
  <li><strong>Edit About</strong> - Update about section</li>
  <li><strong>Manage Services</strong> - Add, edit, delete services</li>
  <li><strong>Manage Portfolio</strong> - Add, edit, delete projects</li>
  <li><strong>Manage Clients</strong> - Add, edit, delete clients</li>
  <li><strong>Edit Contact</strong> - Update contact information</li>
</ul>

<hr>

---

<h2>🔒 Security Features</h2>

<ul>
  <li>✅ Secure admin login with JWT authentication</li>
  <li>✅ Password hashing with bcryptjs</li>
  <li>✅ Protected routes - Only admin can edit content</li>
  <li>✅ CORS configuration to prevent unauthorized requests</li>
  <li>✅ Input validation on both frontend and backend</li>
</ul>

<hr>

---

<h2>💡 Key Accomplishments</h2>

<ul>
  <li>✅ Built a complete full-stack web application from scratch</li>
  <li>✅ Implemented secure authentication and authorization</li>
  <li>✅ Created responsive design that works on all devices</li>
  <li>✅ Set up MongoDB database with proper data models</li>
  <li>✅ Built RESTful API with Express.js</li>
  <li>✅ Implemented file upload functionality</li>
  <li>✅ Created admin dashboard for content management</li>
  <li>✅ Used modern development practices and tools</li>
</ul>

<hr>

---

<h2>🚀 Deployment Options</h2>

<p><strong>Frontend can be deployed to:</strong></p>
<ul>
  <li>Vercel</li>
  <li>Netlify</li>
  <li>GitHub Pages</li>
  <li>AWS S3</li>
</ul>

<p><strong>Backend can be deployed to:</strong></p>
<ul>
  <li>Heroku</li>
  <li>Railway</li>
  <li>DigitalOcean</li>
  <li>AWS EC2</li>
</ul>

<hr>

---

<h2>📞 Contact & Support</h2>

<ul>
  <li><strong>Email:</strong> your-email@example.com</li>
  <li><strong>LinkedIn:</strong> your-linkedin-profile</li>
  <li><strong>GitHub:</strong> your-github-profile</li>
</ul>

<hr>

---

<h2>📝 License</h2>

<p>
  This project is licensed under the MIT License - see the LICENSE file for details.
</p>

<hr>

---

<div align="center">

<h3>⭐ If you like this project, please give it a star!</h3>

<p>
  <strong>My First Freelance Project - Built with passion 💻</strong><br>
  January 2026
</p>

</div>

<hr />

<p>
<strong>Last Updated:</strong> January 2026<br />
<strong>Version:</strong> 0.0.0
</p>

<p><em>Made with ❤️ using Angular</em></p>

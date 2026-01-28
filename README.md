<h1>🎨 Personal Portfolio Website</h1>
<h3>Angular-Based Portfolio with Admin Dashboard</h3>

<hr />

<h2>📌 Project Overview</h2>
<p>
A modern <strong>Personal Portfolio Web Application</strong> built with
<strong>Angular 20</strong>, designed to showcase personal information,
projects, services, and clients.
</p>
<p>
The application includes a <strong>fully functional Admin Dashboard</strong>
that allows content management using complete CRUD operations.
</p>
<p>
This project demonstrates clean architecture, modular design, and
real-world Angular development practices.
</p>

<hr />

<h2>🎯 Target Audience</h2>
<ul>
  <li><strong>HR / Recruiters</strong> – Clear project purpose and features</li>
  <li><strong>Frontend Developers</strong> – Angular best practices</li>
  <li><strong>Full-Stack Developers</strong> – Admin dashboard & API integration</li>
</ul>

<hr />

<h2>✨ Key Features</h2>

<h3>🌐 Public Website</h3>
<ul>
  <li>Home page with introduction</li>
  <li>About page (personal & professional information)</li>
  <li>Services listing</li>
  <li>Portfolio / Projects showcase</li>
  <li>Clients section</li>
  <li>Contact page</li>
  <li>Responsive design (mobile-friendly)</li>
  <li>Shared Header & Footer components</li>
</ul>

<h3>🔐 Admin Dashboard</h3>
<ul>
  <li>Secure admin login</li>
  <li>Home content editor</li>
  <li>About section editor</li>
  <li>Services management (CRUD)</li>
  <li>Portfolio management (CRUD)</li>
  <li>Contact information editor</li>
  <li>Clients management</li>
  <li>Modern UI with sidebar navigation</li>
  <li>Real-time updates</li>
</ul>

<hr />

<h2>🏗️ Architecture Overview</h2>
<p>
The project follows a <strong>Component-Based Architecture</strong> with
clear separation of concerns.
</p>

<pre>
App
├── Public Layout
│   ├── Home
│   ├── About
│   ├── Services
│   ├── Portfolio
│   ├── Clients
│   └── Contact
│
├── Admin Dashboard
│   ├── Login
│   ├── Home Editor
│   ├── About Editor
│   ├── Services Editor
│   ├── Portfolio Editor
│   ├── Contact Editor
│   └── Shared (Header & Sidebar)
│
└── Services
    └── Admin Service (API Communication)
</pre>

<h3>Design Principles</h3>
<ul>
  <li>Clear separation between Public UI and Admin Panel</li>
  <li>Reusable shared components</li>
  <li>Centralized API handling</li>
  <li>Scalable and maintainable structure</li>
</ul>

<hr />

<h2>🛣️ Routing System</h2>

<h3>Public Routes</h3>
<ul>
  <li>/home</li>
  <li>/about</li>
  <li>/services</li>
  <li>/portfolio</li>
  <li>/clients</li>
  <li>/contact</li>
</ul>

<h3>Admin Routes</h3>
<ul>
  <li>/admin/login</li>
  <li>/admin/home</li>
  <li>/admin/about</li>
  <li>/admin/services</li>
  <li>/admin/portfolio</li>
  <li>/admin/contact</li>
</ul>

<p>Invalid routes are redirected to <strong>/home</strong>.</p>

<hr />

<h2>🔧 Admin Service (API Layer)</h2>
<p>
A centralized Angular service handles all backend communication.
</p>

<ul>
  <li>Home section (GET / UPDATE)</li>
  <li>About section (GET / UPDATE)</li>
  <li>Services (CRUD)</li>
  <li>Portfolio (CRUD)</li>
  <li>Clients (CRUD)</li>
  <li>Contact information (GET / UPDATE)</li>
</ul>

<p><strong>API Base URL:</strong></p>
<pre>http://localhost:5000/api</pre>

<hr />

<h2>💻 Technologies Used</h2>

<h3>Frontend</h3>
<ul>
  <li>Angular 20</li>
  <li>TypeScript 5.9</li>
  <li>Angular Router</li>
  <li>RxJS</li>
</ul>

<h3>UI & Styling</h3>
<ul>
  <li>Bootstrap 5</li>
  <li>Font Awesome</li>
  <li>CSS3</li>
</ul>

<h3>Development Tools</h3>
<ul>
  <li>Angular CLI</li>
  <li>Node.js (18+)</li>
  <li>npm</li>
  <li>Karma & Jasmine</li>
  <li>Prettier</li>
</ul>

<hr />

<h2>🚀 Installation & Setup</h2>

<h3>1️⃣ Clone Repository</h3>
<pre>
git clone &lt;repository-url&gt;
cd Frontend
</pre>

<h3>2️⃣ Install Dependencies</h3>
<pre>npm install</pre>

<h3>3️⃣ Run Development Server</h3>
<pre>
npm start
# or
ng serve
</pre>

<ul>
  <li><strong>Public App:</strong> http://localhost:4200</li>
  <li><strong>Admin Panel:</strong> http://localhost:4200/admin/login</li>
</ul>

<hr />

<h2>🧪 Testing</h2>
<pre>npm test</pre>

<hr />

<h2>🔒 Security Status</h2>
<p><strong>⚠️ Development Mode Only</strong></p>
<ul>
  <li>JWT Authentication (planned)</li>
  <li>Role-based authorization</li>
  <li>HTTPS</li>
  <li>Input validation</li>
</ul>

<hr />

<h2>📦 Production Build</h2>
<pre>npm run build -- --configuration production</pre>

<p>Build output:</p>
<pre>dist/portfolio/</pre>

<p>Deployment ready for:</p>
<ul>
  <li>Vercel</li>
  <li>Netlify</li>
  <li>AWS S3</li>
  <li>GitHub Pages</li>
</ul>

<hr />

<h2>📄 License</h2>
<p>This project is licensed under the <strong>MIT License</strong>.</p>

<hr />

<h2>📞 Contact & Support</h2>
<ul>
  <li>Email: your-email@example.com</li>
  <li>LinkedIn: your-linkedin-profile</li>
  <li>GitHub: your-github-profile</li>
</ul>

<hr />

<p>
<strong>Last Updated:</strong> January 2026<br />
<strong>Version:</strong> 0.0.0
</p>

<p><em>Made with ❤️ using Angular</em></p>

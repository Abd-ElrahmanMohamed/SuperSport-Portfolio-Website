import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <div class="admin-container">
      <aside class="admin-sidebar">
        <div class="sidebar-header">
          <h2>Admin Panel</h2>
          <p>Edit Website Content</p>
        </div>

        <nav class="sidebar-nav">
          <a routerLink="/admin/home" routerLinkActive="active" class="nav-link">
            <i class="icon">🏠</i>
            <span>Home</span>
          </a>
          <a routerLink="/admin/about" routerLinkActive="active" class="nav-link">
            <i class="icon">👤</i>
            <span>About</span>
          </a>
          <a routerLink="/admin/services" routerLinkActive="active" class="nav-link">
            <i class="icon">⚙️</i>
            <span>Services</span>
          </a>
          <a routerLink="/admin/portfolio" routerLinkActive="active" class="nav-link">
            <i class="icon">🎨</i>
            <span>Portfolio</span>
          </a>
          <a routerLink="/admin/contact" routerLinkActive="active" class="nav-link">
            <i class="icon">📧</i>
            <span>Contact</span>
          </a>
        </nav>

        <button (click)="logout()" class="logout-btn">
          <i class="icon">🚪</i>
          <span>Logout</span>
        </button>
      </aside>

      <main class="admin-content">
        <div class="content-header">
          <h1>Dashboard</h1>
        </div>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      .admin-container {
        display: flex;
        min-height: 100vh;
        background-color: #f8f9fa;
      }

      .admin-sidebar {
        width: 250px;
        background: linear-gradient(180deg, #0056b3 0%, #003d7a 100%);
        color: white;
        padding: 20px;
        overflow-y: auto;
        position: fixed;
        height: 100vh;
        left: 0;
        top: 0;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
      }

      .sidebar-header {
        margin-bottom: 30px;
        border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        padding-bottom: 20px;
      }

      .sidebar-header h2 {
        margin: 0;
        font-size: 1.5rem;
        color: #ffffff;
      }

      .sidebar-header p {
        margin: 5px 0 0 0;
        font-size: 0.9rem;
        opacity: 0.9;
        color: #e7f1ff;
      }

      .sidebar-nav {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .nav-link {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 15px;
        color: #e7f1ff;
        text-decoration: none;
        border-radius: 5px;
        transition: all 0.3s;
        border-left: 3px solid transparent;
      }

      .nav-link:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #ffffff;
      }

      .nav-link.active {
        background-color: #007bff;
        color: #ffffff;
        font-weight: 600;
        border-left-color: #ffffff;
      }

      .icon {
        font-size: 1.2rem;
      }

      .logout-btn {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 15px;
        background-color: #ff6b35;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;
        margin-top: 20px;
        font-weight: 600;
        margin-left: 10px;
        margin-right: 10px;
        width: calc(100% - 20px);
      }

      .logout-btn:hover {
        background-color: #e55a2a;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(255, 107, 53, 0.3);
      }

      .admin-content {
        margin-left: 250px;
        padding: 30px;
        flex: 1;
        background-color: #ffffff;
      }

      .content-header {
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 2px solid #e7f1ff;
      }

      .content-header h1 {
        color: #0056b3;
        margin: 0;
        font-size: 2rem;
      }

      @media (max-width: 768px) {
        .admin-sidebar {
          width: 100%;
          height: auto;
          position: relative;
        }

        .admin-content {
          margin-left: 0;
        }

        .sidebar-nav {
          flex-direction: row;
          flex-wrap: wrap;
        }

        .nav-link {
          flex: 1;
          min-width: 150px;
        }
      }
    `,
  ],
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    // Dashboard is protected by AuthGuard
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/admin/login']);
  }
}

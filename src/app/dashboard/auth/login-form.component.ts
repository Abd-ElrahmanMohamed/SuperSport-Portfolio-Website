import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-box">
        <div class="login-header">
          <h1>🔐 Admin Login</h1>
          <p>Portfolio Admin Panel</p>
        </div>

        <form (ngSubmit)="login()" class="login-form">
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              [(ngModel)]="email"
              name="email"
              placeholder="admin@example.com"
              class="form-input"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              [(ngModel)]="password"
              name="password"
              placeholder="Enter your password"
              class="form-input"
              required
            />
          </div>

          <button type="submit" class="btn-login" [disabled]="isLoading">
            {{ isLoading ? 'Logging in...' : 'Login' }}
          </button>

          <div *ngIf="errorMessage" class="error-msg">
            <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: linear-gradient(135deg, #0056b3 0%, #003d7a 100%);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .login-box {
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        padding: 40px;
        width: 100%;
        max-width: 400px;
        animation: slideIn 0.5s ease-out;
      }

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .login-header {
        text-align: center;
        margin-bottom: 30px;
      }

      .login-header h1 {
        color: #0056b3;
        margin: 0 0 10px 0;
        font-size: 2rem;
      }

      .login-header p {
        color: #666;
        margin: 0;
        font-size: 0.95rem;
      }

      .login-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .form-group {
        display: flex;
        flex-direction: column;
      }

      .form-group label {
        margin-bottom: 8px;
        color: #333;
        font-weight: 600;
        font-size: 0.95rem;
      }

      .form-input {
        padding: 12px 15px;
        border: 2px solid #e0e0e0;
        border-radius: 5px;
        font-size: 0.95rem;
        font-family: inherit;
        transition: all 0.3s;
      }

      .form-input:focus {
        outline: none;
        border-color: #0056b3;
        box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.1);
      }

      .form-input:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
      }

      .btn-login {
        padding: 12px 20px;
        background: linear-gradient(135deg, #0056b3 0%, #003d7a 100%);
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        margin-top: 10px;
      }

      .btn-login:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 5px 20px rgba(0, 86, 179, 0.3);
      }

      .btn-login:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      .error-msg {
        background-color: #fff3cd;
        color: #856404;
        padding: 12px 15px;
        border-radius: 5px;
        border-left: 4px solid #ff6b6b;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .error-msg i {
        flex-shrink: 0;
      }

      @media (max-width: 480px) {
        .login-box {
          padding: 30px 20px;
        }

        .login-header h1 {
          font-size: 1.5rem;
        }
      }
    `,
  ],
})
export class LoginFormComponent {
  email = '';
  password = '';
  isLoading = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  login(): void {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password';
      return;
    }

    this.isLoading = true;

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.isLoading = false;
        // Successfully logged in, navigate to admin dashboard
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Invalid email or password';
        // Clear password on error
        this.password = '';
      },
    });
  }
}

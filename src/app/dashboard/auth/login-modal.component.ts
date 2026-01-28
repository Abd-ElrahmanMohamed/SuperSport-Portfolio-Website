import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modal-overlay" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="closeModal()">
          <i class="fas fa-times"></i>
        </button>

        <div class="modal-header">
          <h1>🔐 Admin Login</h1>
        </div>

        <form (ngSubmit)="login()" class="login-form">
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              [(ngModel)]="email"
              name="email"
              placeholder="Enter your email"
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
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .modal-content {
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        padding: 40px;
        width: 100%;
        max-width: 400px;
        position: relative;
        animation: slideUp 0.3s ease-out;
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .close-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #999;
        cursor: pointer;
        transition: color 0.3s;
      }

      .close-btn:hover {
        color: #333;
      }

      .modal-header {
        text-align: center;
        margin-bottom: 30px;
      }

      .modal-header h1 {
        color: #0056b3;
        margin: 0;
        font-size: 1.8rem;
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
        background-color: #ffe0e0;
        color: #d32f2f;
        padding: 12px 15px;
        border-radius: 5px;
        border-left: 4px solid #d32f2f;
        font-size: 0.9rem;
      }

      @media (max-width: 480px) {
        .modal-content {
          padding: 30px 20px;
          max-width: 90%;
        }

        .modal-header h1 {
          font-size: 1.5rem;
        }
      }
    `,
  ],
})
export class LoginModalComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<void>();

  email = '';
  password = '';
  isLoading = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  closeModal(): void {
    this.closeModalEvent.emit();
  }

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
        this.loginSuccess.emit();
        this.closeModalEvent.emit();
        // Navigate to admin login page
        this.router.navigate(['/admin/login']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Invalid email or password';
        this.password = '';
      },
    });
  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-modal.html',
  styleUrl: './auth-modal.css',
})
export class AuthModalComponent implements OnInit {
  @ViewChild('authModal') authModal!: ElementRef;

  // Form data
  loginForm = {
    email: '',
    password: '',
  };

  // State management
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  // Form validation
  showLoginErrors = {
    email: false,
    password: false,
  };

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit() {
    // Initialize modal service if needed
  }

  // Show modal
  openModal() {
    this.resetForms();
    this.errorMessage = '';
    this.successMessage = '';
    const modalElement = this.authModal?.nativeElement;
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // Close modal
  closeModal() {
    const modalElement = this.authModal?.nativeElement;
    if (modalElement) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }

  // Validate login form
  validateLoginForm(): boolean {
    this.showLoginErrors = { email: false, password: false };

    if (!this.loginForm.email) {
      this.showLoginErrors.email = true;
    } else if (!this.isValidEmail(this.loginForm.email)) {
      this.showLoginErrors.email = true;
    }

    if (!this.loginForm.password) {
      this.showLoginErrors.password = true;
    }

    return !this.showLoginErrors.email && !this.showLoginErrors.password;
  }

  // Email validation
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Handle login
  onLogin() {
    if (!this.validateLoginForm()) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.http
      .post('http://localhost:5000/api/auth/login', {
        email: this.loginForm.email,
        password: this.loginForm.password,
      })
      .subscribe({
        next: (response: any) => {
          this.isLoading = false;
          this.successMessage = 'Login successful! Redirecting...';

          // Store tokens
          localStorage.setItem('accessToken', response.accessToken);
          if (response.refreshToken) {
            localStorage.setItem('refreshToken', response.refreshToken);
          }

          // Store user info
          localStorage.setItem('user', JSON.stringify(response.user));

          // Close modal and redirect
          setTimeout(() => {
            this.closeModal();
            this.router.navigate(['/admin']);
          }, 1500);
        },
        error: (error: any) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || 'Login failed. Please try again.';
        },
      });
  }

  // Reset forms
  resetForms() {
    this.loginForm = { email: '', password: '' };
    this.showLoginErrors = { email: false, password: false };
  }

  // Get error message for field
  getFieldError(field: string): string {
    if (field === 'email' && this.showLoginErrors.email) {
      return !this.loginForm.email ? 'Email is required' : 'Please enter a valid email';
    }
    if (field === 'password' && this.showLoginErrors.password) {
      return 'Password is required';
    }
    return '';
  }
}

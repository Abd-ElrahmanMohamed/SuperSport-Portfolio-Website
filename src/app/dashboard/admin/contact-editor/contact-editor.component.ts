import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-contact-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="section-editor">
      <h2>Edit Contact Information</h2>

      <form (ngSubmit)="onSave()" class="editor-form">
        <h3>📝 Section Title & Description</h3>
        <div class="form-row">
          <div class="form-group">
            <label for="sectionTitle">Page Title:</label>
            <input
              type="text"
              id="sectionTitle"
              [(ngModel)]="contactData.sectionTitle"
              name="sectionTitle"
              placeholder="Contact Us"
              class="form-input"
            />
          </div>
          <div class="form-group">
            <label for="sectionDescription">Page Description:</label>
            <input
              type="text"
              id="sectionDescription"
              [(ngModel)]="contactData.sectionDescription"
              name="sectionDescription"
              placeholder="Get in touch to learn how we can help you"
              class="form-input"
            />
          </div>
        </div>

        <h3>📧 Email & Phone</h3>
        <div class="form-row">
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              [(ngModel)]="contactData.email"
              name="email"
              class="form-input"
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              [(ngModel)]="contactData.phone"
              name="phone"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="address">Address:</label>
          <input
            type="text"
            id="address"
            [(ngModel)]="contactData.address"
            name="address"
            class="form-input"
          />
        </div>

        <div class="form-actions">
          <button type="submit" class="btn-save" [disabled]="isSaving">
            {{ isSaving ? 'Saving...' : 'Save Changes' }}
          </button>
        </div>

        <div *ngIf="successMessage" class="success-message">{{ successMessage }}</div>
        <div *ngIf="errorMessage" class="error-message">{{ errorMessage }}</div>
      </form>
    </div>
  `,
  styles: [
    `
      .section-editor {
        background: white;
        padding: 30px;
        border-radius: 8px;
      }

      h2 {
        color: #0056b3;
        margin-bottom: 25px;
        margin-top: 0;
        font-size: 1.5rem;
      }

      .editor-form {
        max-width: 600px;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
      }

      .form-group {
        margin-bottom: 20px;
      }

      label {
        display: block;
        margin-bottom: 8px;
        color: #333;
        font-weight: 600;
        font-size: 0.95rem;
      }

      .form-input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 14px;
        transition: border-color 0.3s;
      }

      .form-input:focus {
        outline: none;
        border-color: #007bff;
      }

      .form-actions {
        margin-top: 25px;
      }

      .btn-save {
        padding: 10px 25px;
        background-color: #0056b3;
        color: white;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s;
        font-size: 0.95rem;
      }

      .btn-save:hover {
        background-color: #003d7a;
      }

      .btn-save:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }

      .success-message {
        color: #2e7d32;
        background-color: #e8f5e9;
        padding: 12px;
        border-radius: 5px;
        margin-top: 20px;
        font-size: 0.9rem;
      }

      .error-message {
        color: #d32f2f;
        background-color: #ffebee;
        padding: 12px;
        border-radius: 5px;
        margin-top: 20px;
        font-size: 0.9rem;
      }

      @media (max-width: 768px) {
        .form-row {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ContactEditorComponent implements OnInit {
  contactData = {
    sectionTitle: '',
    sectionDescription: '',
    email: '',
    phone: '',
    address: '',
  };

  isSaving = false;
  successMessage = '';
  errorMessage = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadContactData();
  }

  loadContactData(): void {
    this.adminService.getContact().subscribe(
      (response) => {
        this.contactData = response.data;
      },
      (error) => {
        this.errorMessage = 'Failed to load contact data';
      }
    );
  }

  onSave(): void {
    this.isSaving = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.adminService.updateContact(this.contactData).subscribe(
      (response) => {
        this.isSaving = false;
        this.successMessage = 'Contact information updated successfully!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      (error) => {
        this.isSaving = false;
        this.errorMessage = error.error.message || 'Failed to update contact information';
      }
    );
  }
}

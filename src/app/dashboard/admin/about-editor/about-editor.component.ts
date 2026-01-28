import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-about-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="section-editor">
      <h2>Edit About Section</h2>

      <form (ngSubmit)="onSave()" class="editor-form">
        <div class="form-group">
          <label for="title">Title:</label>
          <input
            type="text"
            id="title"
            [(ngModel)]="aboutData.title"
            name="title"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="description">Short Description:</label>
          <input
            type="text"
            id="description"
            [(ngModel)]="aboutData.description"
            name="description"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="longDescription">Long Description:</label>
          <textarea
            id="longDescription"
            [(ngModel)]="aboutData.longDescription"
            name="longDescription"
            class="form-textarea"
            rows="6"
          ></textarea>

          <!-- Strong Tag Feature -->
          <div class="strong-section">
            <label for="strongPart">Text to make <strong>bold</strong> (Optional):</label>
            <input
              type="text"
              id="strongPart"
              [(ngModel)]="strongPart"
              name="strongPart"
              placeholder="e.g., first sentence or specific text"
              class="form-input"
            />
            <p class="hint">
              Enter the text you want to display in bold. Leave empty if you don't want any bold
              text.
            </p>

            <div *ngIf="strongPart" class="preview-box">
              <p><strong>Preview:</strong></p>
              <div class="preview-content" [innerHTML]="getPreviewWithStrong()"></div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="image">Profile Image URL:</label>
          <input
            type="text"
            id="image"
            [(ngModel)]="aboutData.image"
            name="image"
            class="form-input"
          />
          <div *ngIf="aboutData.image" class="image-preview">
            <img [src]="aboutData.image" alt="About preview" />
          </div>
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

      .form-input,
      .form-textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 14px;
        font-family: Arial, sans-serif;
        transition: border-color 0.3s;
      }

      .form-input:focus,
      .form-textarea:focus {
        outline: none;
        border-color: #007bff;
      }

      .image-preview {
        margin-top: 10px;
        max-width: 300px;
      }

      .image-preview img {
        width: 100%;
        border-radius: 5px;
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

      .strong-section {
        margin-top: 15px;
        padding: 15px;
        background-color: #f5f5f5;
        border-left: 4px solid #0056b3;
        border-radius: 4px;
      }

      .strong-section label {
        margin-top: 10px;
        font-size: 0.9rem;
      }

      .hint {
        font-size: 0.85rem;
        color: #666;
        margin-top: 5px;
        margin-bottom: 10px;
        font-style: italic;
      }

      .preview-box {
        margin-top: 15px;
        padding: 12px;
        background-color: white;
        border: 1px dashed #0056b3;
        border-radius: 4px;
      }

      .preview-box strong {
        font-weight: 600;
        color: #0056b3;
      }

      .preview-content {
        margin-top: 10px;
        line-height: 1.6;
        color: #333;
      }

      .preview-content strong {
        background-color: #fff3cd;
        padding: 2px 4px;
        border-radius: 2px;
      }
    `,
  ],
})
export class AboutEditorComponent implements OnInit {
  aboutData = {
    title: '',
    description: '',
    longDescription: '',
    image: '',
    skills: [],
    experience: [],
  };

  strongPart = ''; // Text to make bold
  isSaving = false;
  successMessage = '';
  errorMessage = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadAboutData();
  }

  loadAboutData(): void {
    this.adminService.getAbout().subscribe(
      (response) => {
        this.aboutData = response.data;
      },
      (error) => {
        this.errorMessage = 'Failed to load about data';
      }
    );
  }

  getPreviewWithStrong(): string {
    if (!this.strongPart || !this.aboutData.longDescription) {
      return this.aboutData.longDescription;
    }

    const escaped = this.escapeHtml(this.aboutData.longDescription);
    const strongEscaped = this.escapeHtml(this.strongPart);

    // Case-insensitive replacement
    const regex = new RegExp(`(${strongEscaped})`, 'gi');
    return escaped.replace(regex, '<strong>$1</strong>');
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  onSave(): void {
    this.isSaving = true;
    this.successMessage = '';
    this.errorMessage = '';

    // Apply strong tag to the longDescription before saving
    if (this.strongPart && this.aboutData.longDescription) {
      const regex = new RegExp(`(${this.escapeRegex(this.strongPart)})`, 'gi');
      this.aboutData.longDescription = this.aboutData.longDescription.replace(
        regex,
        '<strong>$1</strong>'
      );
    }

    this.adminService.updateAbout(this.aboutData).subscribe(
      (response) => {
        this.isSaving = false;
        this.successMessage = 'About section updated successfully!';
        this.strongPart = ''; // Clear the input
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      (error) => {
        this.isSaving = false;
        this.errorMessage = error.error.message || 'Failed to update about section';
      }
    );
  }

  private escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

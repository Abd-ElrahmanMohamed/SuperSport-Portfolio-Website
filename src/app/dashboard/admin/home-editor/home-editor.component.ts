import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-home-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="section-editor">
      <h2>Edit Home Section</h2>

      <form (ngSubmit)="onSave()" class="editor-form">
        <div class="form-group">
          <label for="heroTitle">Hero Title:</label>
          <input
            type="text"
            id="heroTitle"
            [(ngModel)]="homeData.heroTitle"
            name="heroTitle"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="heroDescription">Hero Description:</label>
          <textarea
            id="heroDescription"
            [(ngModel)]="homeData.heroDescription"
            name="heroDescription"
            class="form-textarea"
            rows="4"
          ></textarea>
        </div>

        <div class="form-group">
          <label for="heroButtonText">Button Text:</label>
          <input
            type="text"
            id="heroButtonText"
            [(ngModel)]="homeData.heroButtonText"
            name="heroButtonText"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="heroButtonLink">Button Link:</label>
          <input
            type="text"
            id="heroButtonLink"
            [(ngModel)]="homeData.heroButtonLink"
            name="heroButtonLink"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="heroImage">Hero Image URL:</label>
          <input
            type="text"
            id="heroImage"
            [(ngModel)]="homeData.heroImage"
            name="heroImage"
            class="form-input"
          />
          <div *ngIf="homeData.heroImage" class="image-preview">
            <img [src]="homeData.heroImage" alt="Hero preview" />
          </div>
        </div>

        <!-- Stats Section -->
        <div class="stats-section">
          <h3>📊 Stats Section</h3>
          <p class="stats-hint">Edit the statistics displayed below the hero section</p>

          <div *ngFor="let stat of homeData.stats; let i = index" class="stat-item-form">
            <div class="form-row">
              <div class="form-group">
                <label>Number (e.g., 18+):</label>
                <input
                  type="text"
                  [(ngModel)]="stat.number"
                  name="statNumber{{ i }}"
                  placeholder="18+"
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <label>Label (e.g., Years Experience):</label>
                <input
                  type="text"
                  [(ngModel)]="stat.label"
                  name="statLabel{{ i }}"
                  placeholder="Years Experience"
                  class="form-input"
                />
              </div>
              <button
                type="button"
                (click)="deleteStat(i)"
                class="btn-delete-stat"
                title="Delete this stat"
              >
                ❌
              </button>
            </div>
          </div>

          <button type="button" (click)="addStat()" class="btn-add-stat">➕ Add New Stat</button>
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

      h3 {
        color: #333;
        margin-top: 30px;
        margin-bottom: 10px;
        font-size: 1.1rem;
      }

      .editor-form {
        max-width: 700px;
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

      .stats-section {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        margin-top: 30px;
        border-left: 4px solid #0056b3;
      }

      .stats-hint {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 20px;
        font-style: italic;
      }

      .stat-item-form {
        background-color: white;
        padding: 15px;
        border-radius: 5px;
        margin-bottom: 15px;
        border: 1px solid #e0e0e0;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 2fr auto;
        gap: 10px;
        align-items: flex-end;
      }

      .btn-delete-stat {
        padding: 8px 12px;
        background-color: #ff6b6b;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: background-color 0.3s;
      }

      .btn-delete-stat:hover {
        background-color: #ff5252;
      }

      .btn-add-stat {
        padding: 10px 20px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.3s;
      }

      .btn-add-stat:hover {
        background-color: #218838;
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
    `,
  ],
})
export class HomeEditorComponent implements OnInit {
  homeData = {
    heroTitle: '',
    heroDescription: '',
    heroButtonText: '',
    heroButtonLink: '',
    heroImage: '',
    stats: [
      { number: '18+', label: 'Years Experience' },
      { number: '500+', label: 'Successful Projects' },
      { number: '120+', label: 'Permanent Clients' },
      { number: '50+', label: 'Annual Events' },
    ],
  };

  isSaving = false;
  successMessage = '';
  errorMessage = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadHomeData();
  }

  loadHomeData(): void {
    this.adminService.getHome().subscribe(
      (response) => {
        this.homeData = response.data;
        // Ensure stats exists
        if (!this.homeData.stats) {
          this.homeData.stats = [
            { number: '18+', label: 'Years Experience' },
            { number: '500+', label: 'Successful Projects' },
            { number: '120+', label: 'Permanent Clients' },
            { number: '50+', label: 'Annual Events' },
          ];
        }
      },
      (error) => {
        this.errorMessage = 'Failed to load home data';
      }
    );
  }

  addStat(): void {
    if (!this.homeData.stats) {
      this.homeData.stats = [];
    }
    this.homeData.stats.push({ number: '0+', label: 'New Stat' });
  }

  deleteStat(index: number): void {
    this.homeData.stats?.splice(index, 1);
  }

  onSave(): void {
    this.isSaving = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.adminService.updateHome(this.homeData).subscribe(
      (response) => {
        this.isSaving = false;
        this.successMessage = 'Home section updated successfully!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      (error) => {
        this.isSaving = false;
        this.errorMessage =
          error.error?.message || error.message || 'Failed to update home section';
      }
    );
  }
}

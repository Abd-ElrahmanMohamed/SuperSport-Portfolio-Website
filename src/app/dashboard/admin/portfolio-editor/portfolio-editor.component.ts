import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-portfolio-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="section-editor">
      <h2>Edit Portfolio</h2>

      <div class="add-portfolio-form">
        <h3>Add New Portfolio Item</h3>
        <div class="form-row">
          <div class="form-group full-width">
            <label for="itemTitle">Project Title:</label>
            <input
              type="text"
              id="itemTitle"
              [(ngModel)]="newItem.title"
              placeholder="Project title"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-group full-width">
          <label for="itemDescription">Description:</label>
          <textarea
            id="itemDescription"
            [(ngModel)]="newItem.description"
            placeholder="Project description"
            class="form-textarea"
            rows="4"
          ></textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="itemImage">Image URL:</label>
            <input
              type="text"
              id="itemImage"
              [(ngModel)]="newItem.image"
              placeholder="Image URL"
              class="form-input"
            />
          </div>
          <div class="form-group">
            <label for="itemLink">Project Link:</label>
            <input
              type="text"
              id="itemLink"
              [(ngModel)]="newItem.link"
              placeholder="https://..."
              class="form-input"
            />
          </div>
        </div>

        <button (click)="addPortfolioItem()" class="btn-add" [disabled]="isAdding">
          {{ isAdding ? 'Adding...' : 'Add Portfolio Item' }}
        </button>
      </div>

      <div class="portfolio-list">
        <h3>Current Portfolio Items</h3>
        <div *ngIf="portfolioItems.length === 0" class="no-data">No portfolio items yet</div>

        <div *ngFor="let item of portfolioItems" class="portfolio-item">
          <div class="item-image" *ngIf="item.image">
            <img [src]="item.image" alt="{{ item.title }}" />
          </div>
          <div class="item-content">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <div class="item-links">
              <a *ngIf="item.link" [href]="item.link" target="_blank" class="link-btn">
                View Project
              </a>
            </div>
          </div>
          <button (click)="deletePortfolioItem(item._id)" class="btn-delete">Delete</button>
        </div>
      </div>

      <div *ngIf="successMessage" class="success-message">{{ successMessage }}</div>
      <div *ngIf="errorMessage" class="error-message">{{ errorMessage }}</div>
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
        margin-bottom: 15px;
        font-size: 1.1rem;
      }

      .add-portfolio-form {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 30px;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
      }

      .form-group {
        margin-bottom: 15px;
      }

      .form-group.full-width {
        grid-column: 1 / -1;
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
        transition: border-color 0.3s;
      }

      .form-input:focus,
      .form-textarea:focus {
        outline: none;
        border-color: #007bff;
      }

      .btn-add {
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

      .btn-add:hover {
        background-color: #003d7a;
      }

      .btn-add:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }

      .portfolio-list {
        margin-top: 30px;
      }

      .no-data {
        color: #999;
        text-align: center;
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 5px;
      }

      .portfolio-item {
        display: grid;
        grid-template-columns: 200px 1fr 100px;
        gap: 20px;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
        margin-bottom: 20px;
        align-items: start;
      }

      .item-image {
        overflow: hidden;
        border-radius: 8px;
        max-height: 150px;
      }

      .item-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .item-content h4 {
        margin: 0 0 8px 0;
        color: #333;
        font-size: 0.95rem;
      }

      .item-content p {
        margin: 0 0 12px 0;
        color: #666;
        font-size: 0.85rem;
      }

      .item-links {
        display: flex;
        gap: 10px;
      }

      .link-btn {
        padding: 6px 12px;
        background-color: #0056b3;
        color: white;
        border-radius: 4px;
        text-decoration: none;
        font-size: 0.85rem;
        transition: background-color 0.3s;
      }

      .link-btn:hover {
        background-color: #003d7a;
      }

      .btn-delete {
        padding: 8px 15px;
        background-color: #d32f2f;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
        align-self: center;
        font-size: 0.9rem;
      }

      .btn-delete:hover {
        background-color: #c62828;
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
        .portfolio-item {
          grid-template-columns: 1fr;
        }

        .form-row {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class PortfolioEditorComponent implements OnInit {
  portfolioItems: any[] = [];
  newItem = {
    title: '',
    description: '',
    image: '',
    link: '',
  };

  isAdding = false;
  successMessage = '';
  errorMessage = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadPortfolioItems();
  }

  loadPortfolioItems(): void {
    this.adminService.getPortfolio().subscribe(
      (response) => {
        this.portfolioItems = response.data.items || [];
      },
      (error) => {
        this.errorMessage = 'Failed to load portfolio items';
      }
    );
  }

  addPortfolioItem(): void {
    if (!this.newItem.title || !this.newItem.description || !this.newItem.image) {
      this.errorMessage = 'Please fill in required fields';
      return;
    }

    this.isAdding = true;
    this.adminService.addPortfolioItem(this.newItem).subscribe(
      (response) => {
        this.portfolioItems = response.data.items || [];
        this.newItem = { title: '', description: '', image: '', link: '' };
        this.successMessage = 'Portfolio item added successfully!';
        this.isAdding = false;
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      (error) => {
        this.isAdding = false;
        this.errorMessage = error.error.message || 'Failed to add portfolio item';
      }
    );
  }

  deletePortfolioItem(itemId: string): void {
    if (!confirm('Are you sure you want to delete this portfolio item?')) {
      return;
    }

    this.adminService.deletePortfolioItem(itemId).subscribe(
      (response) => {
        this.portfolioItems = response.data.items || [];
        this.successMessage = 'Portfolio item deleted successfully!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      (error) => {
        this.errorMessage = error.error.message || 'Failed to delete portfolio item';
      }
    );
  }
}

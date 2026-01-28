import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-services-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="section-editor">
      <h2>Edit Services</h2>

      <div class="add-service-form">
        <h3>Section Info</h3>
        <div class="form-group">
          <label for="sectionTitle">Section Title:</label>
          <input
            type="text"
            id="sectionTitle"
            [(ngModel)]="sectionInfo.sectionTitle"
            placeholder="Section Title"
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="sectionDescription">Section Description:</label>
          <textarea
            id="sectionDescription"
            [(ngModel)]="sectionInfo.sectionDescription"
            placeholder="Section Description"
            class="form-textarea"
            rows="2"
          ></textarea>
        </div>
        <button (click)="updateSectionInfo()" class="btn-add" [disabled]="isUpdatingSection">
          {{ isUpdatingSection ? 'Updating...' : 'Update Section Info' }}
        </button>
      </div>

      <div class="add-service-form">
        <h3>Add New Service</h3>
        <div class="form-row">
          <div class="form-group">
            <label for="serviceIcon">Icon (emoji or class):</label>
            <input
              type="text"
              id="serviceIcon"
              [(ngModel)]="newService.icon"
              placeholder="e.g., 💻"
              class="form-input"
            />
          </div>
          <div class="form-group">
            <label for="serviceTitle">Title:</label>
            <input
              type="text"
              id="serviceTitle"
              [(ngModel)]="newService.title"
              placeholder="Service title"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="serviceDescription">Description:</label>
          <textarea
            id="serviceDescription"
            [(ngModel)]="newService.description"
            placeholder="Service description"
            class="form-textarea"
            rows="4"
          ></textarea>
        </div>

        <button (click)="addService()" class="btn-add" [disabled]="isAdding">
          {{ isAdding ? 'Adding...' : 'Add Service' }}
        </button>
      </div>

      <div class="services-list">
        <h3>Current Services</h3>
        <div *ngIf="services.length === 0" class="no-data">No services yet</div>

        <div *ngFor="let service of services" class="service-item">
          <div class="service-icon">{{ service.icon }}</div>
          <div class="service-content">
            <h4>{{ service.title }}</h4>
            <p>{{ service.description }}</p>
          </div>
          <button (click)="deleteService(service._id)" class="btn-delete">Delete</button>
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

      .add-service-form {
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

      .services-list {
        margin-top: 30px;
      }

      .no-data {
        color: #999;
        text-align: center;
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 5px;
      }

      .service-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        background-color: #f9f9f9;
        border-radius: 8px;
        margin-bottom: 15px;
      }

      .service-icon {
        font-size: 2rem;
        min-width: 50px;
        text-align: center;
      }

      .service-content {
        flex: 1;
      }

      .service-content h4 {
        margin: 0 0 5px 0;
        color: #333;
        font-size: 0.95rem;
      }

      .service-content p {
        margin: 0;
        color: #666;
        font-size: 0.85rem;
      }

      .btn-delete {
        padding: 8px 15px;
        background-color: #d32f2f;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
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
    `,
  ],
})
export class ServicesEditorComponent implements OnInit {
  services: any[] = [];
  sectionInfo = {
    sectionTitle: '',
    sectionDescription: '',
  };
  newService = {
    icon: '',
    title: '',
    description: '',
  };

  isAdding = false;
  isUpdatingSection = false;
  successMessage = '';
  errorMessage = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.adminService.getServices().subscribe(
      (response) => {
        this.services = response.data.services || [];
        this.sectionInfo = {
          sectionTitle: response.data.sectionTitle || 'Our Services',
          sectionDescription:
            response.data.sectionDescription ||
            'We offer a comprehensive range of marketing and sports services',
        };
      },
      (error) => {
        this.errorMessage = 'Failed to load services';
      }
    );
  }

  updateSectionInfo(): void {
    this.isUpdatingSection = true;
    this.adminService.updateServicesSection(this.sectionInfo).subscribe(
      (response) => {
        this.successMessage = 'Section info updated successfully!';
        this.isUpdatingSection = false;
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      (error) => {
        this.isUpdatingSection = false;
        this.errorMessage = error.error.message || 'Failed to update section info';
      }
    );
  }

  addService(): void {
    if (!this.newService.icon || !this.newService.title || !this.newService.description) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    this.isAdding = true;
    this.adminService.addService(this.newService).subscribe(
      (response) => {
        this.services = response.data.services || [];
        this.newService = { icon: '', title: '', description: '' };
        this.successMessage = 'Service added successfully!';
        this.isAdding = false;
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      (error) => {
        this.isAdding = false;
        this.errorMessage = error.error.message || 'Failed to add service';
      }
    );
  }

  deleteService(serviceId: string): void {
    if (!confirm('Are you sure you want to delete this service?')) {
      return;
    }

    this.adminService.deleteService(serviceId).subscribe(
      (response) => {
        this.services = response.data.services || [];
        this.successMessage = 'Service deleted successfully!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      (error) => {
        this.errorMessage = error.error.message || 'Failed to delete service';
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-clients-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="section-editor">
      <h2>Edit Clients</h2>

      <div class="add-client-form">
        <h3>Section Info</h3>
        <div class="form-group">
          <label for="partnerTitle">Partner Title:</label>
          <input
            type="text"
            id="partnerTitle"
            [(ngModel)]="sectionInfo.partnerTitle"
            placeholder="Partner Title"
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="partnerDescription">Partner Description:</label>
          <textarea
            id="partnerDescription"
            [(ngModel)]="sectionInfo.partnerDescription"
            placeholder="Partner Description"
            class="form-textarea"
            rows="2"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="partnerButtonText">Button Text:</label>
          <input
            type="text"
            id="partnerButtonText"
            [(ngModel)]="sectionInfo.partnerButtonText"
            placeholder="Button Text"
            class="form-input"
          />
        </div>
        <button (click)="updateSectionInfo()" class="btn-add" [disabled]="isUpdatingSection">
          {{ isUpdatingSection ? 'Updating...' : 'Update Section Info' }}
        </button>
      </div>

      <div class="add-client-form">
        <h3>Add New Client</h3>
        <div class="form-group">
          <label for="clientLogo">Client Logo (URL):</label>
          <input
            type="text"
            id="clientLogo"
            [(ngModel)]="newClient.logo"
            placeholder="Enter logo URL or file path"
            class="form-input"
          />
        </div>

        <div class="form-group" *ngIf="newClient.logo">
          <label>Preview:</label>
          <div class="logo-preview">
            <img [src]="newClient.logo" alt="Logo preview" />
          </div>
        </div>

        <button (click)="addClient()" class="btn-add" [disabled]="isAdding">
          {{ isAdding ? 'Adding...' : 'Add Client' }}
        </button>
      </div>

      <div class="clients-list">
        <h3>Current Clients</h3>
        <div *ngIf="clients.length === 0" class="no-data">No clients yet</div>

        <div *ngFor="let client of clients" class="client-item">
          <div class="client-logo">
            <img [src]="client.logo" [alt]="'Client logo'" />
          </div>
          <button (click)="deleteClient(client._id)" class="btn-delete">Delete</button>
        </div>
      </div>

      <div *ngIf="successMessage" class="success-message">{{ successMessage }}</div>
      <div *ngIf="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  `,
  styles: [
    `
      .section-editor {
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
        margin-bottom: 20px;
      }

      h2 {
        color: #333;
        margin-bottom: 20px;
        font-size: 1.8rem;
      }

      h3 {
        color: #555;
        margin-top: 20px;
        margin-bottom: 15px;
        font-size: 1.2rem;
        border-bottom: 2px solid #ffc107;
        padding-bottom: 10px;
      }

      .add-client-form {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .form-group {
        margin-bottom: 15px;
      }

      .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: 500;
        color: #333;
      }

      .form-input,
      .form-textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-family: inherit;
        font-size: 1rem;
      }

      .form-input:focus,
      .form-textarea:focus {
        outline: none;
        border-color: #ffc107;
        box-shadow: 0 0 5px rgba(255, 193, 7, 0.3);
      }

      .form-textarea {
        resize: vertical;
        min-height: 80px;
      }

      .logo-preview {
        width: 150px;
        height: 150px;
        border: 2px dashed #ddd;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-color: #f5f5f5;
      }

      .logo-preview img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .btn-add,
      .btn-delete {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .btn-add {
        background-color: #ffc107;
        color: #333;
        font-weight: bold;
      }

      .btn-add:hover:not(:disabled) {
        background-color: #ff9800;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      .btn-add:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .btn-delete {
        background-color: #dc3545;
        color: white;
        padding: 8px 15px;
        font-size: 0.9rem;
      }

      .btn-delete:hover {
        background-color: #c82333;
        transform: translateY(-2px);
      }

      .clients-list {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .client-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        border-bottom: 1px solid #eee;
        background-color: #f9f9f9;
        border-radius: 4px;
        margin-bottom: 10px;
      }

      .client-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }

      .client-logo {
        flex: 0 0 100px;
        height: 100px;
        border: 1px solid #ddd;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        overflow: hidden;
      }

      .client-logo img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .no-data {
        text-align: center;
        color: #999;
        padding: 20px;
        font-style: italic;
      }

      .success-message {
        margin-top: 15px;
        padding: 12px;
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
        border-radius: 4px;
        font-weight: 500;
      }

      .error-message {
        margin-top: 15px;
        padding: 12px;
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
        border-radius: 4px;
        font-weight: 500;
      }
    `,
  ],
})
export class ClientsEditorComponent implements OnInit {
  clients: any[] = [];
  newClient = {
    logo: '',
  };

  sectionInfo = {
    partnerTitle: '',
    partnerDescription: '',
    partnerButtonText: '',
  };

  isAdding = false;
  isUpdatingSection = false;
  successMessage = '';
  errorMessage = '';

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.adminService.getClients().subscribe(
      (response: any) => {
        if (response.data && response.data.length > 0) {
          const clientData = response.data[0];
          this.clients = clientData.clients || [];
          this.sectionInfo = {
            partnerTitle: clientData.partnerTitle || '',
            partnerDescription: clientData.partnerDescription || '',
            partnerButtonText: clientData.partnerButtonText || '',
          };
        }
      },
      (error) => {
        this.errorMessage = 'Failed to load clients';
        console.error('Error loading clients:', error);
      },
    );
  }

  addClient() {
    if (!this.newClient.logo.trim()) {
      this.errorMessage = 'Please enter a logo URL';
      return;
    }

    this.isAdding = true;
    this.errorMessage = '';
    this.successMessage = '';

    const newClientData = {
      logo: this.newClient.logo,
    };

    this.adminService.addClient(newClientData).subscribe(
      (response: any) => {
        this.isAdding = false;
        this.successMessage = 'Client added successfully!';
        this.clients.push(newClientData);
        this.newClient.logo = '';
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error) => {
        this.isAdding = false;
        this.errorMessage = error.error?.message || 'Failed to add client';
        console.error('Error adding client:', error);
      },
    );
  }

  deleteClient(clientId: string) {
    if (!confirm('Are you sure you want to delete this client?')) {
      return;
    }

    this.adminService.deleteClient(clientId).subscribe(
      (response: any) => {
        this.successMessage = 'Client deleted successfully!';
        this.clients = this.clients.filter((c) => c._id !== clientId);
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error) => {
        this.errorMessage = error.error?.message || 'Failed to delete client';
        console.error('Error deleting client:', error);
      },
    );
  }

  updateSectionInfo() {
    this.isUpdatingSection = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.adminService.updateClientsSection(this.sectionInfo).subscribe(
      (response: any) => {
        this.isUpdatingSection = false;
        this.successMessage = 'Section info updated successfully!';
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error: any) => {
        this.isUpdatingSection = false;
        this.errorMessage = error.error?.message || 'Failed to update section info';
        console.error('Error updating section info:', error);
      },
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="admin-main-container">
      <aside class="admin-sidebar">
        <div class="sidebar-header">
          <h2>📋 Admin Panel</h2>
          <p>Edit All Website Content</p>
          <button (click)="logout()" class="btn-logout">
            <i class="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>

        <nav class="sidebar-nav">
          <button
            (click)="selectSection('home')"
            [class.active]="currentSection === 'home'"
            class="nav-btn"
          >
            <span class="icon">🏠</span>
            <span>Home Section</span>
          </button>
          <button
            (click)="selectSection('about')"
            [class.active]="currentSection === 'about'"
            class="nav-btn"
          >
            <span class="icon">👤</span>
            <span>About Section</span>
          </button>
          <button
            (click)="selectSection('services')"
            [class.active]="currentSection === 'services'"
            class="nav-btn"
          >
            <span class="icon">⚙️</span>
            <span>Services</span>
          </button>
          <button
            (click)="selectSection('portfolio')"
            [class.active]="currentSection === 'portfolio'"
            class="nav-btn"
          >
            <span class="icon">🎨</span>
            <span>Portfolio</span>
          </button>
          <button
            (click)="selectSection('clients')"
            [class.active]="currentSection === 'clients'"
            class="nav-btn"
          >
            <span class="icon">🤝</span>
            <span>Clients</span>
          </button>
          <button
            (click)="selectSection('contact')"
            [class.active]="currentSection === 'contact'"
            class="nav-btn"
          >
            <span class="icon">📧</span>
            <span>Contact Info</span>
          </button>
          <button
            (click)="selectSection('header')"
            [class.active]="currentSection === 'header'"
            class="nav-btn"
          >
            <span class="icon">📌</span>
            <span>Header</span>
          </button>
          <button
            (click)="selectSection('footer')"
            [class.active]="currentSection === 'footer'"
            class="nav-btn"
          >
            <span class="icon">📄</span>
            <span>Footer</span>
          </button>
        </nav>
      </aside>

      <main class="admin-content">
        <!-- Home Section Editor -->
        <div *ngIf="currentSection === 'home'" class="editor-section">
          <h2>🏠 Edit Home Section</h2>
          <form (ngSubmit)="saveHome()" class="editor-form">
            <div class="form-group">
              <label>Hero Title:</label>
              <input
                type="text"
                [(ngModel)]="homeData.heroTitle"
                name="heroTitle"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Hero Description:</label>
              <textarea
                [(ngModel)]="homeData.heroDescription"
                name="heroDescription"
                class="form-textarea"
                rows="4"
              ></textarea>
            </div>
            <div class="form-group">
              <label>Button Text 1:</label>
              <input
                type="text"
                [(ngModel)]="homeData.heroButtonText"
                name="heroButtonText"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Button Text 2:</label>
              <input
                type="text"
                [(ngModel)]="homeData.ourWorkButtonText"
                name="ourWork ButtonText"
                class="form-input"
                placeholder="Our Work"
              />
            </div>
            <div class="form-group">
              <label>Hero Image URL:</label>
              <input
                type="text"
                [(ngModel)]="homeData.heroImage"
                name="heroImage"
                class="form-input"
              />
              <img
                *ngIf="homeData.heroImage"
                [src]="homeData.heroImage"
                alt="preview"
                class="preview-img"
              />
            </div>

            <!-- Stats Section -->
            <div class="stats-section">
              <h3>📊 Stats Section</h3>
              <p class="stats-hint">Edit the statistics displayed below the hero section</p>

              <div *ngFor="let stat of homeData.stats; let i = index" class="stat-item-form">
                <div class="stat-form-row">
                  <div class="form-group stat-form-group">
                    <label>Number (e.g., 18+):</label>
                    <input
                      type="text"
                      [(ngModel)]="stat.number"
                      name="statNumber{{ i }}"
                      placeholder="18+"
                      class="form-input"
                    />
                  </div>
                  <div class="form-group stat-form-group">
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

              <button type="button" (click)="addStat()" class="btn-add-stat">
                ➕ Add New Stat
              </button>
            </div>

            <button type="submit" class="btn-save" [disabled]="isSaving">
              {{ isSaving ? 'Saving...' : 'Save' }}
            </button>
            <div *ngIf="successMessage" class="success-msg">✅ {{ successMessage }}</div>
            <div *ngIf="errorMessage" class="error-msg">❌ {{ errorMessage }}</div>
          </form>
        </div>

        <!-- About Section Editor -->
        <div *ngIf="currentSection === 'about'" class="editor-section">
          <h2>👤 Edit About Section</h2>
          <form (ngSubmit)="saveAbout()" class="editor-form">
            <div class="form-group">
              <label>Title:</label>
              <input type="text" [(ngModel)]="aboutData.title" name="title" class="form-input" />
            </div>
            <div class="form-group">
              <label>Short Description:</label>
              <input
                type="text"
                [(ngModel)]="aboutData.description"
                name="description"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Long Description:</label>
              <textarea
                [(ngModel)]="aboutData.longDescription"
                name="longDescription"
                class="form-textarea"
                rows="6"
              ></textarea>
            </div>

            <!-- Stats Section in About -->
            <div class="stats-section">
              <h3>📊 Statistics</h3>
              <p class="stats-hint">Edit the statistics displayed in this section</p>

              <div *ngFor="let stat of aboutData.stats; let i = index" class="stat-item-form">
                <div class="stat-form-row">
                  <div class="form-group stat-form-group">
                    <label>Number (e.g., 18+):</label>
                    <input
                      type="text"
                      [(ngModel)]="stat.number"
                      name="aboutStatNumber{{ i }}"
                      placeholder="18+"
                      class="form-input"
                    />
                  </div>
                  <div class="form-group stat-form-group">
                    <label>Label (e.g., Years Experience):</label>
                    <input
                      type="text"
                      [(ngModel)]="stat.label"
                      name="aboutStatLabel{{ i }}"
                      placeholder="Years Experience"
                      class="form-input"
                    />
                  </div>
                  <button
                    type="button"
                    (click)="deleteAboutStat(i)"
                    class="btn-delete-stat"
                    title="Delete this stat"
                  >
                    ❌
                  </button>
                </div>
              </div>

              <button type="button" (click)="addAboutStat()" class="btn-add-stat">
                ➕ Add New Stat
              </button>
            </div>

            <!-- Buttons Section -->
            <div class="buttons-section">
              <h3>🔘 Action Buttons</h3>
              <div class="form-group">
                <label>First Button Text (Our Services):</label>
                <input
                  type="text"
                  [(ngModel)]="aboutData.button1Text"
                  name="button1Text"
                  placeholder="Our Services"
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <label>Second Button Text (Contact Us):</label>
                <input
                  type="text"
                  [(ngModel)]="aboutData.button2Text"
                  name="button2Text"
                  placeholder="Contact Us"
                  class="form-input"
                />
              </div>
            </div>

            <button type="submit" class="btn-save" [disabled]="isSaving">
              {{ isSaving ? 'Saving...' : 'Save' }}
            </button>
            <div *ngIf="successMessage" class="success-msg">✅ {{ successMessage }}</div>
            <div *ngIf="errorMessage" class="error-msg">❌ {{ errorMessage }}</div>
          </form>
        </div>

        <!-- Services Editor -->
        <div *ngIf="currentSection === 'services'" class="editor-section">
          <h2>⚙️ Edit Services</h2>

          <div class="services-section-info">
            <h3>Section Information</h3>
            <div class="form-group">
              <label>Title:</label>
              <input
                type="text"
                [(ngModel)]="servicesInfo.aboutTitle"
                name="servicesAboutTitle"
                class="form-input"
                placeholder="Enter service title"
              />
            </div>
            <div class="form-group">
              <label>Short Description:</label>
              <textarea
                [(ngModel)]="servicesInfo.aboutDescription"
                name="servicesAboutDescription"
                class="form-textarea"
                placeholder="Enter service description"
                rows="4"
              ></textarea>
            </div>
            <div class="form-group">
              <label>Button Text:</label>
              <input
                type="text"
                [(ngModel)]="servicesInfo.buttonText"
                name="servicesButtonText"
                class="form-input"
                placeholder="Enter button text (e.g., Request a Service)"
              />
            </div>
            <button (click)="updateServicesInfo()" class="btn-update">💾 Save Section Info</button>
          </div>

          <div class="services-list">
            <div *ngFor="let service of services" class="service-edit-item">
              <div class="service-icon-display">{{ service.icon }}</div>
              <div class="service-edit-form">
                <div class="form-group">
                  <label>Title:</label>
                  <input
                    type="text"
                    [(ngModel)]="service.title"
                    name="title{{ service._id }}"
                    class="form-input"
                  />
                </div>
                <div class="form-group">
                  <label>Description:</label>
                  <textarea
                    [(ngModel)]="service.description"
                    name="description{{ service._id }}"
                    class="form-textarea"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <button (click)="updateService(service._id)" class="btn-update">💾 Save</button>
            </div>
          </div>

          <div *ngIf="successMessage" class="success-msg">✅ {{ successMessage }}</div>
          <div *ngIf="errorMessage" class="error-msg">❌ {{ errorMessage }}</div>
        </div>

        <!-- Portfolio Editor -->
        <div *ngIf="currentSection === 'portfolio'" class="editor-section">
          <h2>🎨 Edit Portfolio</h2>

          <!-- Portfolio Section Info -->
          <div class="portfolio-section-info">
            <h3>Section Information</h3>
            <div class="form-group">
              <label>Section Title:</label>
              <input
                type="text"
                [(ngModel)]="portfolioInfo.sectionTitle"
                name="portfolioSectionTitle"
                class="form-input"
                placeholder="Enter section title"
              />
            </div>
            <div class="form-group">
              <label>Section Description:</label>
              <textarea
                [(ngModel)]="portfolioInfo.sectionDescription"
                name="portfolioSectionDescription"
                class="form-textarea"
                placeholder="Enter section description"
                rows="2"
              ></textarea>
            </div>
            <button (click)="updatePortfolioInfo()" class="btn-update">💾 Save Section Info</button>
          </div>

          <!-- Add New Portfolio Item -->
          <div class="add-portfolio-form">
            <h3>➕ Add New Portfolio Item</h3>
            <div class="form-row">
              <div class="form-group">
                <label for="newPortfolioTitle">Title:</label>
                <input
                  type="text"
                  id="newPortfolioTitle"
                  [(ngModel)]="newPortfolio.title"
                  name="newPortfolioTitle"
                  class="form-input"
                  placeholder="e.g., Corporate Football Championship"
                />
              </div>
              <div class="form-group">
                <label for="newPortfolioCategory">Category:</label>
                <input
                  type="text"
                  id="newPortfolioCategory"
                  [(ngModel)]="newPortfolio.category"
                  name="newPortfolioCategory"
                  class="form-input"
                  placeholder="e.g., Events"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="newPortfolioDescription">Description:</label>
              <textarea
                id="newPortfolioDescription"
                [(ngModel)]="newPortfolio.description"
                name="newPortfolioDescription"
                class="form-textarea"
                placeholder="Enter portfolio item description"
                rows="3"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="newPortfolioImage">Image URL:</label>
              <input
                type="text"
                id="newPortfolioImage"
                [(ngModel)]="newPortfolio.image"
                name="newPortfolioImage"
                class="form-input"
                placeholder="https://example.com/image.jpg"
              />
              <img
                *ngIf="newPortfolio.image"
                [src]="newPortfolio.image"
                alt="preview"
                class="preview-img"
                style="max-width: 200px; margin-top: 10px;"
              />
            </div>

            <button (click)="addPortfolioItem()" class="btn-add" [disabled]="isAdding">
              {{ isAdding ? 'Adding...' : '➕ Add Portfolio Item' }}
            </button>
          </div>

          <div class="portfolio-list">
            <div *ngFor="let item of portfolioItems" class="portfolio-edit-item">
              <div
                class="portfolio-img-display"
                [style.background-image]="'url(' + item.image + ')'"
              ></div>
              <div class="portfolio-edit-form">
                <div class="form-group">
                  <label>Image URL:</label>
                  <input
                    type="text"
                    [(ngModel)]="item.image"
                    name="image{{ item._id }}"
                    class="form-input"
                    placeholder="Enter image URL"
                  />
                </div>
                <div class="form-group">
                  <label>Title:</label>
                  <input
                    type="text"
                    [(ngModel)]="item.title"
                    name="title{{ item._id }}"
                    class="form-input"
                  />
                </div>
                <div class="form-group">
                  <label>Description:</label>
                  <textarea
                    [(ngModel)]="item.description"
                    name="description{{ item._id }}"
                    class="form-textarea"
                    rows="3"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label>Category:</label>
                  <input
                    type="text"
                    [(ngModel)]="item.category"
                    name="category{{ item._id }}"
                    class="form-input"
                    placeholder="e.g., Sports Marketing"
                  />
                </div>
              </div>
              <button (click)="updatePortfolio(item._id)" class="btn-update">💾 Save</button>
            </div>
          </div>

          <div *ngIf="successMessage" class="success-msg">✅ {{ successMessage }}</div>
          <div *ngIf="errorMessage" class="error-msg">❌ {{ errorMessage }}</div>
        </div>

        <!-- Clients Editor -->
        <div *ngIf="currentSection === 'clients'" class="editor-section">
          <h2>🤝 Edit Clients (Logos)</h2>
          <form (ngSubmit)="addNewClient()" class="editor-form">
            <h3>Add New Client Logo</h3>
            <div class="form-group">
              <label>Upload Logo Image:</label>
              <input
                type="file"
                #logoFileInput
                (change)="onLogoFileSelected($event)"
                accept="image/*"
                class="form-input"
              />
              <div *ngIf="logoPreview" class="preview-container">
                <img
                  [src]="logoPreview"
                  alt="Logo preview"
                  class="preview-img"
                  style="width: 155px; height: 155px; object-fit: contain; flex-shrink: 0; flex-basis: 155px;"
                />
              </div>
            </div>
            <button type="submit" class="btn-add" [disabled]="isAdding || !logoPreview">
              {{ isAdding ? 'Adding...' : '➕ Add Client Logo' }}
            </button>
          </form>

          <div class="clients-list">
            <h3>Current Client Logos</h3>
            <p *ngIf="clients.length === 0" style="color: #999;">No clients added yet</p>
            <div class="clients-grid">
              <div *ngFor="let client of clients" class="client-logo-item">
                <img
                  [src]="client.logo"
                  alt="Client logo"
                  class="logo-display"
                  [title]="client.logo"
                />
                <p style="font-size: 12px; color: #666; word-break: break-all; max-width: 155px;">
                  {{ client.logo }}
                </p>
                <button (click)="deleteClient(client._id)" class="btn-delete">🗑️ Delete</button>
              </div>
            </div>
          </div>
          <div *ngIf="successMessage" class="success-msg">✅ {{ successMessage }}</div>
          <div *ngIf="errorMessage" class="error-msg">❌ {{ errorMessage }}</div>

          <div class="partner-section">
            <h3>Edit Partner Section</h3>
            <form (ngSubmit)="savePartnerInfo()" class="editor-form">
              <div class="form-group">
                <label>Partner Title:</label>
                <input
                  type="text"
                  [(ngModel)]="partnerInfo.title"
                  name="partnerTitle"
                  class="form-input"
                  placeholder="Become Our Partner"
                />
              </div>
              <div class="form-group">
                <label>Partner Description:</label>
                <textarea
                  [(ngModel)]="partnerInfo.description"
                  name="partnerDesc"
                  class="form-input"
                  placeholder="Join our list of successful clients and partners"
                  rows="3"
                ></textarea>
              </div>
              <div class="form-group">
                <label>Button Text:</label>
                <input
                  type="text"
                  [(ngModel)]="partnerInfo.buttonText"
                  name="partnerButton"
                  class="form-input"
                  placeholder="Contact Us"
                />
              </div>
              <button type="submit" class="btn-save" [disabled]="isSaving">
                {{ isSaving ? 'Saving...' : '💾 Save Partner Info' }}
              </button>
            </form>
          </div>
        </div>

        <!-- Contact Editor -->
        <div *ngIf="currentSection === 'contact'" class="editor-section">
          <h2>📧 Edit Contact Information</h2>
          <form (ngSubmit)="saveContact()" class="editor-form">
            <h3>� Section Title & Description</h3>
            <div class="form-group">
              <label>Page Title:</label>
              <input
                type="text"
                [(ngModel)]="contactData.sectionTitle"
                name="sectionTitle"
                placeholder="Contact Us"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Page Description:</label>
              <input
                type="text"
                [(ngModel)]="contactData.sectionDescription"
                name="sectionDescription"
                placeholder="Get in touch to learn how we can help you"
                class="form-input"
              />
            </div>

            <h3>�📧 Emails</h3>
            <div
              *ngFor="let email of contactData.emails; let i = index; trackBy: trackByIndex"
              class="contact-item-form"
            >
              <div class="contact-form-row">
                <input
                  type="email"
                  [(ngModel)]="contactData.emails[i]"
                  [name]="'email' + i"
                  placeholder="email@example.com"
                  class="form-input"
                />
                <button type="button" (click)="deleteEmail(i)" class="btn-delete-item">
                  ❌ Delete
                </button>
              </div>
            </div>
            <button type="button" (click)="addEmail()" class="btn-add-item">➕ Add Email</button>

            <h3 style="margin-top: 20px;">📞 Phone Numbers</h3>
            <div
              *ngFor="let phone of contactData.phones; let i = index; trackBy: trackByIndex"
              class="contact-item-form"
            >
              <div class="contact-form-row">
                <input
                  type="tel"
                  [(ngModel)]="contactData.phones[i]"
                  [name]="'phone' + i"
                  placeholder="+20 100 000 0000"
                  class="form-input"
                />
                <button type="button" (click)="deletePhone(i)" class="btn-delete-item">
                  ❌ Delete
                </button>
              </div>
            </div>
            <button type="button" (click)="addPhone()" class="btn-add-item">➕ Add Phone</button>

            <div class="form-group" style="margin-top: 20px;">
              <label>Address:</label>
              <input
                type="text"
                [(ngModel)]="contactData.address"
                name="address"
                class="form-input"
              />
            </div>
            <button type="submit" class="btn-save" [disabled]="isSaving">
              {{ isSaving ? 'Saving...' : 'Save' }}
            </button>
            <div *ngIf="successMessage" class="success-msg">✅ {{ successMessage }}</div>
            <div *ngIf="errorMessage" class="error-msg">❌ {{ errorMessage }}</div>
          </form>
        </div>

        <!-- Header Editor -->
        <div *ngIf="currentSection === 'header'" class="editor-section">
          <h2>📌 Edit Header</h2>
          <form (ngSubmit)="saveHeader()" class="editor-form">
            <h3>Header Top Contact Info</h3>
            <div class="form-group">
              <label>Phone:</label>
              <input type="tel" [(ngModel)]="headerData.phone" name="phone" class="form-input" />
            </div>
            <div class="form-group">
              <label>Email:</label>
              <input type="email" [(ngModel)]="headerData.email" name="email" class="form-input" />
            </div>
            <div class="form-group">
              <label>Business Hours:</label>
              <input
                type="text"
                [(ngModel)]="headerData.hours"
                name="hours"
                class="form-input"
                placeholder="e.g., Sun - Thurs: 9AM - 5PM"
              />
            </div>
            <h3 style="margin-top: 30px;">Social Media Links</h3>
            <div class="form-group">
              <label>Facebook Link:</label>
              <input
                type="text"
                [(ngModel)]="headerData.facebook"
                name="facebook"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Twitter Link:</label>
              <input
                type="text"
                [(ngModel)]="headerData.twitter"
                name="twitter"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Instagram Link:</label>
              <input
                type="text"
                [(ngModel)]="headerData.instagram"
                name="instagram"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>LinkedIn Link:</label>
              <input
                type="text"
                [(ngModel)]="headerData.linkedin"
                name="linkedin"
                class="form-input"
              />
            </div>
            <button type="submit" class="btn-save" [disabled]="isSaving">
              {{ isSaving ? 'Saving...' : 'Save' }}
            </button>
            <div *ngIf="successMessage" class="success-msg">✅ {{ successMessage }}</div>
            <div *ngIf="errorMessage" class="error-msg">❌ {{ errorMessage }}</div>
          </form>
        </div>

        <!-- Footer Editor -->
        <div *ngIf="currentSection === 'footer'" class="editor-section">
          <h2>📄 Edit Footer</h2>
          <form (ngSubmit)="saveFooter()" class="editor-form">
            <div class="form-group">
              <label>Company Name:</label>
              <input
                type="text"
                [(ngModel)]="footerData.companyName"
                name="companyName"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Company Description:</label>
              <textarea
                [(ngModel)]="footerData.description"
                name="description"
                class="form-textarea"
                rows="4"
              ></textarea>
            </div>
            <h3 style="margin-top: 30px;">Social Media Links</h3>
            <div class="form-group">
              <label>Facebook:</label>
              <input
                type="text"
                [(ngModel)]="footerData.facebook"
                name="facebook"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Twitter:</label>
              <input
                type="text"
                [(ngModel)]="footerData.twitter"
                name="twitter"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Instagram:</label>
              <input
                type="text"
                [(ngModel)]="footerData.instagram"
                name="instagram"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>LinkedIn:</label>
              <input
                type="text"
                [(ngModel)]="footerData.linkedin"
                name="linkedin"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Copyright Year:</label>
              <input
                type="number"
                [(ngModel)]="footerData.copyrightYear"
                name="copyrightYear"
                class="form-input"
              />
            </div>
            <button type="submit" class="btn-save" [disabled]="isSaving">
              {{ isSaving ? 'Saving...' : 'Save' }}
            </button>
            <div *ngIf="successMessage" class="success-msg">✅ {{ successMessage }}</div>
            <div *ngIf="errorMessage" class="error-msg">❌ {{ errorMessage }}</div>
          </form>
        </div>
      </main>
    </div>
  `,
  styles: [
    `
      .admin-main-container {
        display: flex;
        min-height: 100vh;
        background-color: #f5f5f5;
      }

      .admin-sidebar {
        width: 250px;
        background: linear-gradient(180deg, #0056b3 0%, #003d7a 100%);
        color: white;
        padding: 20px;
        position: fixed;
        height: 100vh;
        overflow-y: auto;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
      }

      .sidebar-header {
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 2px solid rgba(255, 255, 255, 0.2);
      }

      .sidebar-header h2 {
        margin: 0;
        font-size: 1.3rem;
        color: #ffffff;
      }

      .sidebar-header p {
        margin: 8px 0 0 0;
        font-size: 0.85rem;
        color: #e7f1ff;
      }

      .btn-logout {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        padding: 10px;
        margin-top: 15px;
        background-color: #d32f2f;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.9rem;
        transition: background-color 0.3s;
      }

      .btn-logout:hover {
        background-color: #c62828;
      }

      .sidebar-nav {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .nav-btn {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 15px;
        background: rgba(255, 255, 255, 0.1);
        color: #e7f1ff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;
        font-size: 0.95rem;
        font-weight: 500;
      }

      .nav-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        color: #ffffff;
      }

      .nav-btn.active {
        background: #007bff;
        color: #ffffff;
        font-weight: 600;
      }

      .icon {
        font-size: 1.1rem;
      }

      .admin-content {
        margin-left: 250px;
        padding: 30px;
        flex: 1;
        background-color: #ffffff;
      }

      .editor-section {
        max-width: 800px;
      }

      .editor-section h2 {
        color: #0056b3;
        margin-bottom: 25px;
        font-size: 1.8rem;
      }

      .editor-section h3 {
        color: #333;
        margin-top: 20px;
        margin-bottom: 15px;
        font-size: 1.2rem;
      }

      .editor-form {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 30px;
      }

      .form-group {
        margin-bottom: 20px;
      }

      .form-group label {
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

      .preview-img {
        width: 155px !important;
        height: 155px !important;
        max-width: 155px !important;
        max-height: 155px !important;
        object-fit: contain !important;
        margin-top: 10px;
        border-radius: 5px;
        display: block !important;
      }

      .btn-save,
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

      .btn-save:hover,
      .btn-add:hover {
        background-color: #003d7a;
      }

      .btn-save:disabled,
      .btn-add:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }

      .btn-delete {
        padding: 8px 15px;
        background-color: #d32f2f;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      .btn-delete:hover {
        background-color: #c62828;
      }

      .services-list,
      .portfolio-list,
      .clients-list {
        margin-top: 30px;
      }

      .clients-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 20px;
        padding: 20px;
        background: #f9f9f9;
        border-radius: 8px;
      }

      .client-logo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      .logo-display {
        width: 155px;
        height: 155px;
        object-fit: contain;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: white;
        display: block;
      }

      .preview-container {
        margin-top: 15px;
        padding: 5px;
        background: transparent;
        border-radius: 8px;
        display: inline-block;
      }

      .preview-img {
        width: 155px !important;
        height: 155px !important;
        max-width: 155px !important;
        max-height: 155px !important;
        object-fit: contain !important;
        border-radius: 8px;
        display: block !important;
      }

      .services-info {
        background-color: #e3f2fd;
        padding: 12px;
        border-left: 4px solid #0056b3;
        border-radius: 4px;
        margin-bottom: 20px;
        color: #0056b3;
        font-size: 0.9rem;
      }

      .services-section-info {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 30px;
        border: 1px solid #ddd;
      }

      .services-section-info h3 {
        margin-top: 0;
        color: #0056b3;
        margin-bottom: 20px;
      }

      .services-section-info .btn-update {
        padding: 10px 25px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s;
        font-size: 0.95rem;
        margin-top: 10px;
      }

      .services-section-info .btn-update:hover {
        background-color: #218838;
      }

      .services-section-info .btn-update:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }

      .service-edit-item {
        display: grid;
        grid-template-columns: 80px 1fr 100px;
        gap: 20px;
        padding: 20px;
        background: #f9f9f9;
        border-radius: 8px;
        margin-bottom: 20px;
        border: 1px solid #e0e0e0;
        align-items: start;
      }

      .service-icon-display {
        font-size: 3rem;
        text-align: center;
        min-width: 80px;
      }

      .service-edit-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .service-edit-form .form-group {
        margin-bottom: 0;
      }

      .portfolio-info {
        background-color: #fff3e0;
        padding: 12px;
        border-left: 4px solid #ff6f00;
        border-radius: 4px;
        margin-bottom: 20px;
        color: #ff6f00;
        font-size: 0.9rem;
      }

      .portfolio-section-info {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 30px;
        border: 1px solid #ddd;
      }

      .portfolio-section-info h3 {
        margin-top: 0;
        color: #0056b3;
        margin-bottom: 20px;
      }

      .portfolio-section-info .btn-update {
        padding: 10px 25px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s;
        font-size: 0.95rem;
        margin-top: 10px;
      }

      .portfolio-section-info .btn-update:hover {
        background-color: #218838;
      }

      .portfolio-section-info .btn-update:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }

      .portfolio-edit-item {
        display: grid;
        grid-template-columns: 150px 1fr 100px;
        gap: 20px;
        padding: 20px;
        background: #f9f9f9;
        border-radius: 8px;
        margin-bottom: 20px;
        border: 1px solid #e0e0e0;
        align-items: start;
      }

      .portfolio-img-display {
        width: 150px;
        height: 120px;
        background-size: cover;
        background-position: center;
        border-radius: 5px;
        border: 1px solid #ddd;
      }

      .portfolio-edit-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .portfolio-edit-form .form-group {
        margin-bottom: 0;
      }

      .btn-update {
        padding: 10px 20px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.3s;
        align-self: flex-start;
        margin-top: 5px;
      }

      .btn-update:hover {
        background-color: #218838;
      }

      .service-item,
      .client-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        background: #f9f9f9;
        border-radius: 8px;
        margin-bottom: 15px;
      }

      .service-icon {
        font-size: 2rem;
        min-width: 50px;
        text-align: center;
      }

      .service-info,
      .client-info {
        flex: 1;
      }

      .service-info h4,
      .client-info h4 {
        margin: 0 0 5px 0;
        color: #333;
      }

      .service-info p {
        margin: 0;
        color: #666;
        font-size: 0.9rem;
      }

      .portfolio-item {
        display: grid;
        grid-template-columns: 200px 1fr 100px;
        gap: 20px;
        padding: 15px;
        background: #f9f9f9;
        border-radius: 8px;
        margin-bottom: 15px;
        align-items: center;
      }

      .portfolio-img {
        width: 100%;
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
      }

      .portfolio-info {
        flex: 1;
      }

      .portfolio-info h4 {
        margin: 0 0 5px 0;
        color: #333;
      }

      .portfolio-info p {
        margin: 0 0 10px 0;
        color: #666;
        font-size: 0.9rem;
      }

      .portfolio-link {
        color: #0056b3;
        text-decoration: none;
        font-weight: 600;
      }

      .success-msg {
        color: #2e7d32;
        background-color: #e8f5e9;
        padding: 12px;
        border-radius: 5px;
        margin-top: 15px;
        font-size: 0.9rem;
      }

      .error-msg {
        color: #d32f2f;
        background-color: #ffebee;
        padding: 12px;
        border-radius: 5px;
        margin-top: 15px;
        font-size: 0.9rem;
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

      .stat-form-row {
        display: grid;
        grid-template-columns: 1fr 2fr auto;
        gap: 10px;
        align-items: flex-end;
      }

      .stat-form-group {
        margin-bottom: 0;
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
        margin-top: 10px;
      }

      .btn-add-stat:hover {
        background-color: #218838;
      }

      .contact-item-form {
        margin-bottom: 15px;
        padding: 10px;
        background: #f5f5f5;
        border-radius: 5px;
      }

      .contact-form-row {
        display: flex;
        gap: 10px;
        align-items: center;
      }

      .contact-form-row .form-input {
        flex: 1;
      }

      .btn-delete-item {
        padding: 8px 12px;
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.3s;
        white-space: nowrap;
      }

      .btn-delete-item:hover {
        background-color: #c82333;
      }

      .btn-add-item {
        padding: 10px 20px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.3s;
        margin-top: 10px;
        margin-bottom: 20px;
      }

      .btn-add-item:hover {
        background-color: #218838;
      }

      @media (max-width: 768px) {
        .admin-sidebar {
          width: 100%;
          position: relative;
          height: auto;
        }

        .admin-content {
          margin-left: 0;
        }

        .portfolio-item {
          grid-template-columns: 1fr;
        }

        .sidebar-nav {
          flex-direction: row;
          flex-wrap: wrap;
        }

        .nav-btn {
          flex: 1;
          min-width: 150px;
        }
      }
    `,
  ],
})
export class AdminLoginComponent {
  currentSection = 'home';
  isSaving = false;
  isAdding = false;
  successMessage = '';
  errorMessage = '';

  homeData = {
    heroTitle: 'Super Sport Advertising & Events',
    heroDescription:
      "Pioneers in sports advertising and event management in Egypt and the Middle East. We provide creative and innovative solutions that combine sports passion with marketing expertise to achieve our clients' goals.",
    heroButtonText: 'Request Service',
    heroButtonLink: '/contact',
    ourWorkButtonText: 'Our Work',
    heroImage:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    stats: [
      { number: '18+', label: 'Years Experience' },
      { number: '500+', label: 'Successful Projects' },
      { number: '120+', label: 'Permanent Clients' },
      { number: '50+', label: 'Annual Events' },
    ],
  };

  aboutData = {
    title: 'About Us',
    description: 'Learn more about Super Sport',
    longDescription:
      'Super Sport Advertising & Events is one of the leading companies in sports marketing and advertising in Egypt and the Middle East. Founded in 2005, the company has extensive experience in organizing and managing sports events of all kinds, in addition to providing innovative advertising solutions for brands targeting sports audiences.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    stats: [
      { number: '18+', label: 'Years Experience' },
      { number: '500+', label: 'Successful Projects' },
      { number: '120+', label: 'Permanent Clients' },
      { number: '50+', label: 'Annual Events' },
    ],
    button1Text: 'Our Services',
    button2Text: 'Contact Us',
  };

  servicesInfo = {
    aboutTitle: '',
    aboutDescription: '',
    buttonText: '',
  };

  newService = {
    icon: '⚙️',
    title: '',
    description: '',
  };

  services: any[] = [];

  newPortfolio = {
    title: '',
    description: '',
    image: '',
    category: '',
    link: '',
  };

  portfolioItems: any[] = [];

  portfolioInfo = {
    sectionTitle: '',
    sectionDescription: '',
  };

  contactData = {
    sectionTitle: 'Contact Us',
    sectionDescription: 'Get in touch to learn how we can help you',
    emails: ['info@supersport.com.eg'],
    phones: ['+20 100 090 8280'],
    address: '52 Mohy El Din Abo El Ezz At.Floor 8, Dokki, Giza, Egypt',
  };

  partnerInfo = {
    title: 'Become Our Partner',
    description: 'Join our list of successful clients and partners',
    buttonText: 'Contact Us',
  };

  newClient = {
    logo: '',
  };

  logoFile: File | null = null;
  logoPreview: string | null = null;

  clients: any[] = [];

  headerData = {
    phone: '+20 100 090 8280',
    email: 'info@supersport.com.eg',
    hours: 'Sun - Thurs: 9AM - 5PM',
    facebook: 'https://facebook.com/supersport',
    twitter: 'https://twitter.com/supersport',
    instagram: 'https://instagram.com/supersport',
    linkedin: 'https://linkedin.com/company/supersport',
  };

  footerData = {
    companyName: 'Super Sport Advertising & Events',
    description: 'A leading company in sports advertising and event management.',
    facebook: 'https://facebook.com/supersport',
    twitter: 'https://twitter.com/supersport',
    instagram: 'https://instagram.com/supersport',
    linkedin: 'https://linkedin.com/company/supersport',
    copyrightYear: new Date().getFullYear(),
  };

  constructor(private adminService: AdminService, private router: Router) {
    this.loadAllData();
  }

  selectSection(section: string): void {
    this.currentSection = section;
    this.successMessage = '';
    this.errorMessage = '';
  }

  loadAllData(): void {
    this.adminService.getHome().subscribe((res) => {
      this.homeData = res.data || this.homeData;
    });
    this.adminService.getAbout().subscribe((res) => {
      this.aboutData = res.data || this.aboutData;
    });
    this.adminService.getServices().subscribe((res) => {
      this.services = res.data?.services || [];
      this.servicesInfo = {
        aboutTitle: res.data?.sectionTitle || '',
        aboutDescription: res.data?.sectionDescription || '',
        buttonText: res.data?.buttonText || 'Request a Service',
      };
    });
    this.adminService.getPortfolio().subscribe((res) => {
      this.portfolioItems = res.data?.items || [];
      this.portfolioInfo = {
        sectionTitle: res.data?.sectionTitle || 'Our Portfolio',
        sectionDescription:
          res.data?.sectionDescription || 'Showcasing our most prominent projects',
      };
    });
    this.adminService.getContact().subscribe((res) => {
      this.contactData = res.data || this.contactData;
    });
    this.adminService.getClients().subscribe((res) => {
      console.log('getClients response:', res);
      this.clients = res.data?.clients || [];
      this.partnerInfo = {
        title: res.data?.partnerTitle || 'Become Our Partner',
        description:
          res.data?.partnerDescription || 'Join our list of successful clients and partners',
        buttonText: res.data?.partnerButtonText || 'Contact Us',
      };
      console.log('Clients after getClients:', this.clients);
    });
    this.adminService.getHeader().subscribe((res) => {
      this.headerData = res.data || this.headerData;
    });
    this.adminService.getFooter().subscribe((res) => {
      this.footerData = res.data || this.footerData;
    });
  }

  saveHome(): void {
    this.isSaving = true;
    this.adminService.updateHome(this.homeData).subscribe(
      () => {
        this.isSaving = false;
        this.successMessage = 'Home section saved!';
        this.loadAllData();
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error) => {
        this.isSaving = false;
        this.errorMessage = 'Failed to save';
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
    if (this.homeData.stats) {
      this.homeData.stats.splice(index, 1);
    }
  }

  addAboutStat(): void {
    if (!this.aboutData.stats) {
      this.aboutData.stats = [];
    }
    this.aboutData.stats.push({ number: '0+', label: 'New Stat' });
  }

  deleteAboutStat(index: number): void {
    if (this.aboutData.stats) {
      this.aboutData.stats.splice(index, 1);
    }
  }

  saveAbout(): void {
    this.isSaving = true;
    this.adminService.updateAbout(this.aboutData).subscribe(
      () => {
        this.isSaving = false;
        this.successMessage = 'About section saved!';
        this.loadAllData();
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error) => {
        this.isSaving = false;
        this.errorMessage = 'Failed to save';
      }
    );
  }

  addNewService(): void {
    if (!this.newService.icon || !this.newService.title || !this.newService.description) {
      this.errorMessage = 'Please fill all fields';
      return;
    }
    this.isAdding = true;
    this.adminService.addService(this.newService).subscribe(
      (res) => {
        this.isAdding = false;
        this.services = res.data?.services || [];
        this.newService = { icon: '⚙️', title: '', description: '' };
        this.successMessage = 'Service added!';
        this.loadAllData();
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error) => {
        this.isAdding = false;
        this.errorMessage = 'Failed to add service';
      }
    );
  }

  deleteService(id: string): void {
    this.adminService.deleteService(id).subscribe(
      (res) => {
        this.services = res.data?.services || [];
        this.successMessage = 'Service deleted!';
        this.loadAllData();
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error) => {
        this.errorMessage = 'Failed to delete';
      }
    );
  }

  updateServicesInfo(): void {
    if (
      !this.servicesInfo.aboutTitle ||
      !this.servicesInfo.aboutDescription ||
      !this.servicesInfo.buttonText
    ) {
      this.errorMessage = 'Please fill all fields';
      return;
    }

    this.isSaving = true;
    this.adminService
      .updateServicesSection({
        sectionTitle: this.servicesInfo.aboutTitle,
        sectionDescription: this.servicesInfo.aboutDescription,
        buttonText: this.servicesInfo.buttonText,
      })
      .subscribe(
        (res: any) => {
          this.isSaving = false;
          this.successMessage = 'Services info updated!';
          setTimeout(() => (this.successMessage = ''), 3000);
        },
        (error: any) => {
          this.isSaving = false;
          this.errorMessage = 'Failed to update services info';
        }
      );
  }

  updateService(id: string): void {
    const service = this.services.find((s) => s._id === id);
    if (!service) {
      this.errorMessage = 'Service not found';
      return;
    }

    if (!service.title || !service.description) {
      this.errorMessage = 'Please fill all fields';
      return;
    }

    this.isSaving = true;
    this.adminService
      .updateService(id, {
        title: service.title,
        description: service.description,
      })
      .subscribe(
        (res) => {
          this.isSaving = false;
          this.services = res.data?.services || [];
          this.successMessage = 'Service updated!';
          setTimeout(() => (this.successMessage = ''), 3000);
        },
        (error) => {
          this.isSaving = false;
          this.errorMessage = 'Failed to update service';
        }
      );
  }

  updatePortfolioInfo(): void {
    if (!this.portfolioInfo.sectionTitle || !this.portfolioInfo.sectionDescription) {
      this.errorMessage = 'Please fill all fields';
      return;
    }

    this.isSaving = true;
    this.adminService
      .updatePortfolioSection({
        sectionTitle: this.portfolioInfo.sectionTitle,
        sectionDescription: this.portfolioInfo.sectionDescription,
      })
      .subscribe(
        (res: any) => {
          this.isSaving = false;
          this.successMessage = 'Portfolio info updated!';
          setTimeout(() => (this.successMessage = ''), 3000);
        },
        (error: any) => {
          this.isSaving = false;
          this.errorMessage = 'Failed to update portfolio info';
        }
      );
  }

  addPortfolioItem(): void {
    if (
      !this.newPortfolio.title ||
      !this.newPortfolio.description ||
      !this.newPortfolio.image ||
      !this.newPortfolio.category
    ) {
      this.errorMessage = 'Please fill all fields';
      return;
    }

    this.isAdding = true;
    this.adminService
      .addPortfolioItem({
        title: this.newPortfolio.title,
        description: this.newPortfolio.description,
        image: this.newPortfolio.image,
        category: this.newPortfolio.category,
        link: this.newPortfolio.link || '',
      })
      .subscribe(
        (res: any) => {
          this.isAdding = false;
          this.portfolioItems = res.data?.items || [];
          this.successMessage = 'Portfolio item added successfully!';
          // Reset form
          this.newPortfolio = {
            title: '',
            description: '',
            image: '',
            category: '',
            link: '',
          };
          setTimeout(() => (this.successMessage = ''), 3000);
        },
        (error: any) => {
          this.isAdding = false;
          this.errorMessage = 'Failed to add portfolio item';
        }
      );
  }

  updatePortfolio(id: string): void {
    const portfolioItem = this.portfolioItems.find((item) => item._id === id);
    if (!portfolioItem) {
      this.errorMessage = 'Portfolio item not found';
      return;
    }

    if (!portfolioItem.title || !portfolioItem.description || !portfolioItem.image) {
      this.errorMessage = 'Title, description, and image are required';
      return;
    }

    // Send title, description, category, and image
    const updateData = {
      title: portfolioItem.title,
      description: portfolioItem.description,
      category: portfolioItem.category || 'General',
      image: portfolioItem.image,
    };

    this.adminService.updatePortfolioItem(id, updateData).subscribe(
      (res) => {
        this.successMessage = 'Portfolio item updated!';
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error) => {
        this.errorMessage = 'Failed to update portfolio';
      }
    );
  }

  saveContact(): void {
    this.isSaving = true;
    this.adminService.updateContact(this.contactData).subscribe(
      () => {
        this.isSaving = false;
        this.successMessage = 'Contact info saved!';
        this.loadAllData();
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error) => {
        this.isSaving = false;
        this.errorMessage = 'Failed to save';
      }
    );
  }

  addEmail(): void {
    this.contactData.emails.push('');
  }

  deleteEmail(index: number): void {
    this.contactData.emails.splice(index, 1);
  }

  addPhone(): void {
    this.contactData.phones.push('');
  }

  deletePhone(index: number): void {
    this.contactData.phones.splice(index, 1);
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  addNewClient(): void {
    if (!this.logoFile) {
      this.errorMessage = 'Please select a logo image';
      return;
    }
    this.isAdding = true;

    const formData = new FormData();
    formData.append('logo', this.logoFile);

    this.adminService.addClientWithFile(formData).subscribe(
      (res) => {
        console.log('Response from server:', res);
        this.isAdding = false;
        this.clients = res.data?.clients || [];
        console.log('Updated clients:', this.clients);
        this.logoFile = null;
        this.logoPreview = null;
        this.successMessage = 'Client logo added!';
        this.loadAllData();
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error) => {
        console.error('Error adding client:', error);
        this.isAdding = false;
        this.errorMessage = 'Failed to add client logo';
      }
    );
  }

  onLogoFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.logoFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.logoPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  deleteClient(id: string): void {
    this.adminService.deleteClient(id).subscribe(
      (res) => {
        this.clients = res.data?.clients || [];
        this.successMessage = 'Client deleted!';
        this.loadAllData();
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error) => {
        this.errorMessage = 'Failed to delete';
      }
    );
  }

  savePartnerInfo(): void {
    this.isSaving = true;
    const partnerData = {
      partnerTitle: this.partnerInfo.title,
      partnerDescription: this.partnerInfo.description,
      partnerButtonText: this.partnerInfo.buttonText,
    };
    this.adminService.updateClientsPartner(partnerData).subscribe(
      (res) => {
        this.isSaving = false;
        this.successMessage = 'Partner info saved!';
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error) => {
        this.isSaving = false;
        this.errorMessage = 'Failed to save partner info';
      }
    );
  }

  saveHeader(): void {
    this.isSaving = true;
    this.adminService.updateHeader(this.headerData).subscribe(
      () => {
        this.isSaving = false;
        this.successMessage = 'Header saved!';
        this.loadAllData();
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error) => {
        this.isSaving = false;
        this.errorMessage = 'Failed to save';
      }
    );
  }

  saveFooter(): void {
    this.isSaving = true;
    this.adminService.updateFooter(this.footerData).subscribe(
      () => {
        this.isSaving = false;
        this.successMessage = 'Footer saved!';
        this.loadAllData();
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      (error) => {
        this.isSaving = false;
        this.errorMessage = 'Failed to save';
      }
    );
  }

  logout(): void {
    this.router.navigate(['/home']);
  }
}

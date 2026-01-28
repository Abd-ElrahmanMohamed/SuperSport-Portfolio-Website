import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  // Home section
  getHome(): Observable<any> {
    return this.http.get(`${this.apiUrl}/home`);
  }

  updateHome(homeData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/home`, homeData);
  }

  // About section
  getAbout(): Observable<any> {
    return this.http.get(`${this.apiUrl}/about`);
  }

  updateAbout(aboutData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/about`, aboutData);
  }

  // Services
  getServices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/services`);
  }

  addService(serviceData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/services`, serviceData);
  }

  updateServicesSection(sectionData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/services/section-info`, sectionData);
  }

  updateService(serviceId: string, serviceData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/services/${serviceId}`, serviceData);
  }

  deleteService(serviceId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/services/${serviceId}`);
  }

  // Portfolio
  getPortfolio(): Observable<any> {
    return this.http.get(`${this.apiUrl}/portfolio`);
  }

  addPortfolioItem(itemData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/portfolio`, itemData);
  }

  updatePortfolioSection(sectionData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/portfolio/section-info`, sectionData);
  }

  updatePortfolioItem(itemId: string, itemData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/portfolio/${itemId}`, itemData);
  }

  deletePortfolioItem(itemId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/portfolio/${itemId}`);
  }

  // Contact
  getContact(): Observable<any> {
    return this.http.get(`${this.apiUrl}/contact`);
  }

  updateContact(contactData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/contact`, contactData);
  }

  // Clients
  getClients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clients`);
  }

  addClient(clientData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/clients`, clientData);
  }

  addClientWithFile(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/clients/upload`, formData);
  }

  deleteClient(clientId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clients/${clientId}`);
  }

  updateClientsPartner(partnerData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/clients/partner`, partnerData);
  }

  updateClientsSection(sectionData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/clients/section-info`, sectionData);
  }

  // Header
  getHeader(): Observable<any> {
    return this.http.get(`${this.apiUrl}/header`);
  }

  updateHeader(headerData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/header`, headerData);
  }

  // Footer
  getFooter(): Observable<any> {
    return this.http.get(`${this.apiUrl}/footer`);
  }

  updateFooter(footerData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/footer`, footerData);
  }
}

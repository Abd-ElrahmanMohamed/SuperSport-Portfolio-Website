import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-clients',
  imports: [RouterLink, CommonModule],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class Clients implements OnInit {
  clients: any[] = [
    { name: 'Client 1', logo: 'https://via.placeholder.com/150x80?text=Client+1' },
    { name: 'Client 2', logo: 'https://via.placeholder.com/150x80?text=Client+2' },
    { name: 'Client 3', logo: 'https://via.placeholder.com/150x80?text=Client+3' },
  ];

  partnerData = {
    title: 'Become Our Partner',
    description: 'Join our list of successful clients and partners',
    buttonText: 'Contact Us',
  };

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadClientsData();
  }

  loadClientsData(): void {
    this.adminService.getClients().subscribe((res) => {
      if (res.data?.clients?.length > 0) {
        this.clients = res.data.clients;
      }
      // حمل بيانات Partner من API
      this.partnerData = {
        title: res.data?.partnerTitle || 'Become Our Partner',
        description:
          res.data?.partnerDescription || 'Join our list of successful clients and partners',
        buttonText: res.data?.partnerButtonText || 'Contact Us',
      };
    });
  }
}

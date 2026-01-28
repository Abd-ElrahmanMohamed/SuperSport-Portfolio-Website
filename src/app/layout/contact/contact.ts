import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  contactData: any = {
    email: 'contact@supersport.com',
    phone: '+1 (555) 123-4567',
    address: 'Sports Complex, Cairo, Egypt',
    hours: 'Mon - Fri: 9AM - 6PM',
  };

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getContact().subscribe((res) => {
      if (res.data) {
        this.contactData = res.data;
      }
    });
  }
}

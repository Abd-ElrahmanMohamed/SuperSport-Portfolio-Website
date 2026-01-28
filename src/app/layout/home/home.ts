import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  homeData: any = {
    heroTitle: 'Super Sport Advertising & Events',
    heroDescription: 'Pioneers in sports advertising and event management',
    heroButtonText: 'Request Service',
    heroButtonLink: '/contact',
    ourWorkButtonText: 'Our Work',
    heroImage:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  };

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getHome().subscribe((res) => {
      this.homeData = res.data || this.homeData;
    });
  }
}

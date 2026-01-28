import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  aboutData: any = {
    title: 'About Us',
    description: 'Learn more about Super Sport',
    longDescription:
      'Super Sport Advertising & Events is one of the leading companies in sports marketing and advertising in Egypt and the Middle East.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  };

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getAbout().subscribe((res) => {
      this.aboutData = res.data || this.aboutData;
    });
  }
}

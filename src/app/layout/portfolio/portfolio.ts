import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio implements OnInit {
  portfolioData: any = {
    sectionTitle: 'Our Portfolio',
    sectionDescription: 'Showcasing our most prominent projects',
  };

  portfolioItems: any[] = [
    {
      title: 'World Cup Coverage 2022',
      category: 'Broadcasting',
      image: 'https://via.placeholder.com/400x300?text=World+Cup',
      description: 'Professional coverage of international sporting events',
    },
    {
      title: 'Marathon Event',
      category: 'Event Management',
      image: 'https://via.placeholder.com/400x300?text=Marathon',
      description: 'Organization and execution of sporting marathons',
    },
    {
      title: 'Sports Sponsorship Campaign',
      category: 'Marketing',
      image: 'https://via.placeholder.com/400x300?text=Sponsorship',
      description: 'Strategic brand partnerships with sports teams',
    },
  ];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getPortfolio().subscribe((res) => {
      if (res.data) {
        this.portfolioData = {
          sectionTitle: res.data.sectionTitle || this.portfolioData.sectionTitle,
          sectionDescription: res.data.sectionDescription || this.portfolioData.sectionDescription,
        };
        if (res.data?.items?.length > 0) {
          this.portfolioItems = res.data.items;
        }
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  sectionTitle = 'Our Services';
  sectionDescription = 'We offer a comprehensive range of marketing and sports services';
  buttonText = 'Request a Service';

  private readonly staticIcons = [
    'fas fa-bullhorn',
    'fas fa-calendar-alt',
    'fas fa-users',
    'fas fa-tv',
    'fas fa-broadcast-tower',
    'fas fa-chart-line',
  ];

  services: any[] = [
    {
      icon: 'fas fa-bullhorn',
      title: 'Sports Advertising',
      description:
        'Customized advertising campaigns for sports activities and events, focusing on targeting sports audiences with high efficiency.',
    },
    {
      icon: 'fas fa-calendar-alt',
      title: 'Event Management',
      description:
        'Complete organization and management of sports events from matches and championships to conferences and sports parties.',
    },
    {
      icon: 'fas fa-users',
      title: 'Sports Marketing',
      description:
        'Innovative marketing strategies to enhance brands through sports partnerships and sponsorships.',
    },
    {
      icon: 'fas fa-tv',
      title: 'TV Production',
      description:
        'Production of high-quality sports programs and reports for TV channels and digital platforms.',
    },
    {
      icon: 'fas fa-broadcast-tower',
      title: 'Live Broadcasting',
      description:
        'Live broadcasting services for sports events of all kinds with the highest technical quality standards.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Sports Analytics',
      description:
        'Studies and analysis of the sports market to help clients make informed marketing decisions.',
    },
  ];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getServices().subscribe((res) => {
      if (res.data) {
        this.sectionTitle = res.data.sectionTitle || this.sectionTitle;
        this.sectionDescription = res.data.sectionDescription || this.sectionDescription;
        this.buttonText = res.data.buttonText || this.buttonText;

        if (res.data.services && res.data.services.length > 0) {
          this.services = res.data.services.map((service: any, index: number) => ({
            ...service,
            icon: this.staticIcons[index] || 'fas fa-star',
          }));
        }
      }
    });
  }
}

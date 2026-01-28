import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  footerData: any = {
    description: 'A leading company in sports advertising and event management.',
    year: new Date().getFullYear(),
    companyName: 'Super Sport Advertising & Events',
    rights: 'All Rights Reserved.',
  };

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getFooter().subscribe((res) => {
      if (res.data) {
        this.footerData = res.data;
      }
    });
  }
}

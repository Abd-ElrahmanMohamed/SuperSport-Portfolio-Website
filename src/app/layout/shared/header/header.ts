import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { LoginModalComponent } from '../../../dashboard/auth/login-modal.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule, LoginModalComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  headerData: any = {
    phone: '+20 100 090 8280',
    email: 'info@supersport.com.eg',
    hours: 'Sun - Thurs: 9AM - 5PM',
  };

  showLoginModal = false;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getHeader().subscribe((res) => {
      if (res.data) {
        this.headerData = res.data;
      }
    });
  }

  openLoginModal(): void {
    this.showLoginModal = true;
  }

  closeLoginModal(): void {
    this.showLoginModal = false;
  }
}

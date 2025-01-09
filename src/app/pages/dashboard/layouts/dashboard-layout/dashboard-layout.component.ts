import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard_Links } from '../../../../constants/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent implements OnInit {
  Dashboard_Links = Dashboard_Links;
  sidebarOpen = false;
  userMenuOpen = false;
  adminUser: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // Get admin user info from storage
    const userStr = localStorage.getItem('adminUser') || sessionStorage.getItem('adminUser');
    if (userStr) {
      this.adminUser = JSON.parse(userStr);
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
  }

  logout() {
    // Clear both storages
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    sessionStorage.removeItem('adminToken');
    sessionStorage.removeItem('adminUser');

    // Navigate to login
    this.router.navigate(['/admin/login']);
  }
}

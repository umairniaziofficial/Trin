import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Dashboard_Links } from './../../../constants/data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {
  Dashboard_Links = Dashboard_Links;
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}

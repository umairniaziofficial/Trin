import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-subnav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './subnav.component.html'
})
export class SubnavComponent {
  navLinks = [
    { path: '/new', label: 'New' },
    { path: '/trending', label: 'Trending' },
    { path: '/running-shoe', label: 'Running Shoes' },
    { path: '/basketball-shoe', label: 'Basketball Shoes' },
    { path: '/casual-sneaker', label: 'Casual Sneaker' },
    { path: '/winter', label: 'Winter' }
  ];
}

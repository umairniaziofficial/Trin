import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';
import { NAV_LINKS } from '../../constants/data';

@Component({
  selector: 'app-subnav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './subnav.component.html'
})
export class SubnavComponent {
  navLinks = NAV_LINKS;
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent } from '../../sections';
import { SubnavComponent } from '../../components/subnav/subnav.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SubnavComponent, FooterComponent],
  templateUrl: "./default-layout.component.html"
})
export class DefaultLayoutComponent {}

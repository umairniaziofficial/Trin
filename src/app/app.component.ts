import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubnavComponent } from "./components/subnav/subnav.component";
import { FooterComponent, HeaderComponent } from './sections';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SubnavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Trin';
}

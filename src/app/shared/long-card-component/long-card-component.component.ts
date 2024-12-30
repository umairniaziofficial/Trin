import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-long-card-component',
  templateUrl: './long-card-component.component.html',
  styleUrls: ['./long-card-component.component.scss'],
})
export class LongCardComponentComponent {
  @Input() title: string = 'Default Title';
  @Input() description: string = 'Default description text.';
  @Input() buttonText: string = 'Click Me';
  @Input() buttonBackground: string = '#3498db';
  @Input() buttonTextColor: string = '#ffffff';
  @Input() imgSrc: string = 'assets/images/fallback-poster.jpg';
  @Input() cardTextColor: string = '#ffffff';
  @Input() link: string = '#';
}

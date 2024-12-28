import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styles: [':host { display: block; }'] // Styles are handled in the template.
})
export class NotFoundComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {
    this.titleService.setTitle('404 - Page Not Found | Trin');
    this.metaService.updateTag({
      name: 'description',
      content: "Sorry, the page you're looking for does not exist. Please check the URL or return to the homepage."
    });
  }
}

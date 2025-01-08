import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  onSubmit() {
    // TODO: Implement contact form submission logic
    console.log('Contact form submitted:', {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      subject: this.subject,
      message: this.message
    });
  }
}

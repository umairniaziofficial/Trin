import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit(): void {
    if (this.validateForm()) {
      console.log('Form submitted:', {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe
      });
    }
  }

  private validateForm(): boolean {
    if (!this.email || !this.password) {
      console.error('Please fill in all required fields');
      return false;
    }
    return true;
  }
}

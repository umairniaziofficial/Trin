import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface SignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
})
export class SignupComponent {
  currentStep = 1;

  formData: SignupForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  };

  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(): void {
    if (this.validateForm()) {
      console.log('Form submitted:', this.formData);
    }
  }

  private validateForm(): boolean {
    if (this.formData.password !== this.formData.confirmPassword) {
      console.error('Passwords do not match');
      return false;
    }

    if (!this.formData.terms) {
      console.error('Please accept the terms and conditions');
      return false;
    }

    return true;
  }
}

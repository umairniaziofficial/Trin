import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
export class SignupComponent implements OnInit {
  currentStep = 1;

  formData: SignupForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Redirect if user is already logged in
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

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
      const signupData = {
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        email: this.formData.email,
        password: this.formData.password
      };

      this.authService.signup(signupData).subscribe({
        next: (response) => {
          console.log('Signup successful:', response);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Signup failed:', error);
          if (error.status === 409) {
            alert('This email is already registered');
          } else {
            alert('Signup failed. Please try again.');
          }
        }
      });
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

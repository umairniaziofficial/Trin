import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface SigninForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
})
export class SigninComponent implements OnInit {
  formData: SigninForm = {
    email: '',
    password: '',
  };

  loading = false;
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    this.loading = true;
    this.error = '';

    const signinData = {
      ...this.formData,
      isAdminPanel: false
    };

    this.authService.signin(signinData).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.role === 'user') {
          this.router.navigate(['/']);
        } else {
          this.error = 'Please use the admin login page.';
        }
      },
      error: (error) => {
        this.loading = false;
        this.error = error.error.message || 'An error occurred. Please try again.';
      }
    });
  }
}

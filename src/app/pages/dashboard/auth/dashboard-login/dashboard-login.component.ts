import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
})
export class DashboardLoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
    });
  }

  ngOnInit() {
    // Check if user is already logged in
    if (localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken')) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    this.isLoading = true;
    this.error = '';

    const loginData = {
      ...this.loginForm.value,
      isAdminPanel: true  // Add this flag for admin panel
    };

    this.authService.signin(loginData).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.role === 'admin') {
          this.router.navigate(['/dashboard']);
        } else {
          this.error = 'Access denied. Admin only.';
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.error = error.error.message || 'An error occurred. Please try again.';
      }
    });
  }
}

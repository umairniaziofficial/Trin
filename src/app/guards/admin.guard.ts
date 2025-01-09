import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const adminUser = localStorage.getItem('adminUser');
    if (adminUser) {
      const user = JSON.parse(adminUser);
      if (user.role === 'admin') {
        return true;
      }
    }

    this.router.navigate(['/admin/login']);
    return false;
  }
}

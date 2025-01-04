import { NgIf, NgClass, NgFor, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, RouterLink, NgClass, NgFor, CurrencyPipe],
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderComponent {
  menuOpen: boolean = false;
  isCartOpen: boolean = false;
  cartItems: any[] = [];
  cartItemCount: number = 0;
  cartTotal: number = 0;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  increaseQuantity(item: any): void {
    item.quantity++;
    this.updateCart();
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCart();
    }
  }

  removeItem(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.updateCart();
    }
  }

  updateCart(): void {
    this.cartItemCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    this.cartTotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  checkout(): void {
    // TODO: Implement checkout logic
    console.log('Checkout clicked');
  }
}

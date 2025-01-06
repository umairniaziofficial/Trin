import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from "../components/shared/cart-item/cart-item.component";
import { CartOrderSummaryComponent } from "../components/shared/cart-order-summary/cart-order-summary.component";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [FormsModule, CartItemComponent, CartOrderSummaryComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  discountCode: string = '';
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItemComponent, CartOrderSummaryComponent } from '../../components';

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

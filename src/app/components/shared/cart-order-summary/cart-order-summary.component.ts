import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-order-summary',
  imports: [],
  templateUrl: './cart-order-summary.component.html',
  styleUrl: './cart-order-summary.component.scss'
})
export class CartOrderSummaryComponent {
  @Input() product: any = {};
  totalAmount: number = 0.0;

  ngOnInit() {
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = parseFloat((
      parseFloat(this.product.price || 0) -
      parseFloat(this.product.discount || 0) +
      parseFloat(this.product.deliveryFee || 0)
    ).toFixed(2));
  }
}

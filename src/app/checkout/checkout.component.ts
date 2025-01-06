import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  selectedPayment: 'card' | 'safepay' | 'cod' | null = null;
  selectedBillingAddress: 'same' | 'different' = 'same';
  discountCode: string = '';
  isOrderSummaryOpen: boolean = false;
}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping',
  imports: [NgFor],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss'
})
export class ShippingComponent {
  shipments = [
    {
      id: 1,
      customer: { name: 'John Doe', initials: 'JD' },
      status: 'Delivered',
      date: '2024-01-01',
      total: 100
    }
  ];
  getStatusClasses(status: string) {
    return {
      'bg-green-100': status === 'Delivered',
      'bg-yellow-100': status === 'In Transit',
      'bg-red-100': status === 'Pending'
    };
  }
}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  imports: [NgFor],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  transactions = [
    {
      id: 'TRX-001',
      date: '2024-01-15',
      type: 'Payment',
      amount: 299.99,
      status: 'Completed'
    },
    {
      id: 'TRX-002',
      date: '2024-01-14',
      type: 'Refund',
      amount: 49.99,
      status: 'Pending'
    },
    {
      id: 'TRX-003',
      date: '2024-01-13',
      type: 'Payment',
      amount: 149.99,
      status: 'Failed'
    }
  ];
}

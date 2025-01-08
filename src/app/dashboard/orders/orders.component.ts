import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Order {
  id: string;
  customer: {
    name: string;
    initials: string;
  };
  status: 'Completed' | 'Pending' | 'Cancelled';
  date: string;
  total: number;
}

@Component({
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  standalone: true
})
export class OrdersComponent {
  orders: Order[] = [
    {
      id: '#12345',
      customer: {
        name: 'Umair Niazi',
        initials: 'UN'
      },
      status: 'Completed',
      date: 'Feb 20, 2024',
      total: 299.99
    },
    // Add more sample orders as needed
  ];


  getStatusClasses(status: string): string {
    const baseClasses = 'px-2.5 py-1 rounded-full text-xs font-medium';

    switch (status.toLowerCase()) {
      case 'completed':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'processing':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'cancelled':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  }
}


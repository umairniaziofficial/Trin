import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  imports: [NgFor],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  customers = [
    { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'Active' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '098-765-4321', status: 'Inactive' }
  ];
}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [NgFor],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    {
      name: 'Wireless Headphones',
      image: 'assets/placeholder.svg',
      category: 'Electronics',
      stock: 45,
      price: 129.99
    },
    {
      name: 'Smart Watch Pro',
      image: 'assets/placeholder.svg',
      category: 'Electronics',
      stock: 8,
      price: 249.99
    },
    {
      name: 'Leather Laptop Bag',
      image: 'assets/placeholder.svg',
      category: 'Accessories',
      stock: 23,
      price: 79.99
    }
  ];
}

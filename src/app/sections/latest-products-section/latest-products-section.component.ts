import { Component } from '@angular/core';
import { Product_Model } from '../../models/index.type';
import { Latest_Product } from '../../constants/data';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-latest-products-section',
  imports: [NgFor,NgClass],
  templateUrl: './latest-products-section.component.html',
  styleUrl: './latest-products-section.component.scss'
})
export class LatestProductsSectionComponent {
  Latest_Items : Product_Model[] = Latest_Product;
}

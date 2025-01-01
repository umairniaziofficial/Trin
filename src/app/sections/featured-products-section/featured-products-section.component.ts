import { Component } from '@angular/core';
import { TopPicks } from '../../constants/data';
import { NgFor } from '@angular/common';
import { Product_Model } from '../../models/index.type';

@Component({
  selector: 'app-featured-products-section',
  imports: [NgFor],
  templateUrl: './featured-products-section.component.html',
  styleUrl: './featured-products-section.component.scss'
})
export class FeaturedProductsSectionComponent {
  Products : Product_Model[] = TopPicks;
}

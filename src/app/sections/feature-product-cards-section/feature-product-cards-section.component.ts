import { Component } from '@angular/core';
import { LongCardComponentComponent } from '../../shared/long-card-component/long-card-component.component';
import { PRODUCT_CARD_ITEM } from '../../constants/data';
import { NgFor } from '@angular/common';
import { Product_Card_Model } from '../../models/index.type';

@Component({
  selector: 'app-feature-product-cards-section',
  imports: [LongCardComponentComponent, NgFor],
  templateUrl: './feature-product-cards-section.component.html',
  styleUrls: ['./feature-product-cards-section.component.scss']
})
export class FeatureProductCardsSectionComponent {
  CARD_ITEMS: Product_Card_Model[] = PRODUCT_CARD_ITEM;
}

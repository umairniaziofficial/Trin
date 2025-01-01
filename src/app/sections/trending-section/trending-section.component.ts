import { Component } from '@angular/core';
import { Trending_Model } from '../../models/index.type';
import { Trending } from '../../constants/data';

@Component({
  selector: 'app-trending-section',
  imports: [],
  templateUrl: './trending-section.component.html',
  styleUrl: './trending-section.component.scss'
})
export class TrendingSectionComponent {
  Trending_Items : Trending_Model[] = Trending;
}

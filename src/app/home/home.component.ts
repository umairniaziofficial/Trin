import { Component } from '@angular/core';
import {
  MainBannerSectionComponent,
  FeatureProductCardsSectionComponent,
  FeaturedProductsSectionComponent,
  LatestProductsSectionComponent,
  TrendingSectionComponent,
  VideoBannerComponent,
  CategoriesSectionComponent,
  TestimonialComponent,
  FeatureBannerSectionComponent,
} from '../sections';

@Component({
  selector: 'app-home',
  imports: [
    MainBannerSectionComponent,
    FeatureProductCardsSectionComponent,
    FeaturedProductsSectionComponent,
    LatestProductsSectionComponent,
    TrendingSectionComponent,
    VideoBannerComponent,
    CategoriesSectionComponent,
    TestimonialComponent,
    FeatureBannerSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }

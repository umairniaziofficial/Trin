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
  TrustBadgesSectionComponent
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
    TrustBadgesSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }

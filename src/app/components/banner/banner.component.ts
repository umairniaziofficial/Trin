import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [NgFor],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  bannerItems = [
    {
      imageSrc: 'assets/images/banner/Image1.png',
      headingText: 'Classy Sneakers Wear',
      description: 'Step Up Your Style with Classy Sneakers Wear – Where Comfort Meets Elegance!',
      buttonText: 'Shop Now',
      buttonBackground: '#000000',
      buttonTextColor: '#fff',
      bannerBackgroundColor: '#fceae1',
      imageSide: 'right',
    },
    {
      imageSrc: 'assets/images/banner/Image2.png',
      headingText: 'Sports Shoes',
      description: 'Push your limits with ultimate comfort and durability in every stride',
      buttonText: 'Shop Now',
      textColor: "#fff",
      buttonBackground: '#d9d9d9',
      buttonTextColor: '#000',
      bannerBackgroundColor: '#0a0a0a',
      imageSide: 'left',
    },
    {
      imageSrc: 'assets/images/banner/Image3.png',
      headingText: 'Modern Shoes',
      description: 'Experience redefined style and unmatched comfort with every step you take',
      buttonText: 'Shop Now',
      textColor: "#000",
      buttonBackground: '#000',
      buttonTextColor: '#fff',
      bannerBackgroundColor: '#f2eae3',
      imageSide: 'right',
    }
  ];
}

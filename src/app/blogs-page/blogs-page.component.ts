import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogs-page',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './blogs-page.component.html',
  styleUrl: './blogs-page.component.scss'
})
export class BlogsPageComponent {
  showFilters = false;

  blogs = [
    {
      title: 'The Ultimate Guide to Running Shoe Selection',
      excerpt: 'Learn how to choose the perfect running shoes based on your foot type, running style, and training needs.',
      image: 'assets/images/running-shoes-guide.jpg',
      category: 'Buying Guide',
      date: 'March 15, 2024',
      slug: 'ultimate-running-shoe-guide'
    },
    {
      title: 'Understanding Shoe Cushioning Technologies',
      excerpt: 'A deep dive into different cushioning technologies used in modern athletic footwear.',
      image: 'assets/images/cushioning-tech.jpg',
      category: 'Shoe Anatomy',
      date: 'March 12, 2024',
      slug: 'shoe-cushioning-technologies'
    },
    {
      title: 'Common Foot Problems and How to Address Them',
      excerpt: 'Identifying and treating common foot issues with proper footwear choices.',
      image: 'assets/images/foot-problems.jpg',
      category: 'Foot Health',
      date: 'March 8, 2024',
      slug: 'common-foot-problems'
    }
  ];

  categories = [
    'All Posts',
    'Latest Articles',
    'Shoe Anatomy',
    'Foot Health',
    'Buying Guide',
    'Care Tips'
  ];

  selectedCategory: string = 'All Posts';

  filterByCategory(category: string) {
    this.selectedCategory = category;
    // Filter logic would go here
  }
}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-posts',
  imports: [NgFor],
  templateUrl: './blog-posts.component.html',
  styleUrl: './blog-posts.component.scss'
})
export class BlogPostsComponent {
  posts = [
    {
      title: 'Getting Started with Angular Development',
      author: 'John Smith',
      category: 'Development',
      publishedDate: '2024-01-15',
      status: 'Published',
      image: 'assets/placeholder.svg'
    },
    {
      title: 'Best Practices for Modern Web Design',
      author: 'Sarah Johnson',
      category: 'Design',
      publishedDate: '2024-01-14',
      status: 'Published',
      image: 'assets/placeholder.svg'
    },
    {
      title: 'Introduction to TailwindCSS',
      author: 'Mike Wilson',
      category: 'CSS',
      publishedDate: null,
      status: 'Draft',
      image: 'assets/placeholder.svg'
    }
  ];
}

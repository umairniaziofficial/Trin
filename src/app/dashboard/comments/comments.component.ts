import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [NgFor],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  comments = [
    {
      userName: 'Jane Cooper',
      userAvatar: 'assets/placeholder.svg',
      content: 'Great article! This really helped me understand Angular development better.',
      postTitle: 'Getting Started with Angular Development',
      date: '2024-01-15',
      status: 'Approved'
    },
    {
      userName: 'Robert Fox',
      userAvatar: 'assets/placeholder.svg',
      content: 'The design principles covered here are very practical. Looking forward to more content like this.',
      postTitle: 'Best Practices for Modern Web Design',
      date: '2024-01-14',
      status: 'Pending'
    },
    {
      userName: 'Wade Warren',
      userAvatar: 'assets/placeholder.svg',
      content: 'This content seems inappropriate and off-topic.',
      postTitle: 'Introduction to TailwindCSS',
      date: '2024-01-13',
      status: 'Rejected'
    }
  ];

}

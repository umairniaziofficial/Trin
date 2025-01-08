import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Notification {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  time: string;
  isUnread?: boolean;
}

interface NotificationGroup {
  title: string;
  notifications: Notification[];
}

@Component({
  selector: 'app-notifications',
  imports: [NgFor],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  notificationGroups: NotificationGroup[] = [
    {
      title: 'Today',
      notifications: [
        {
          icon: 'notifications',
          iconBg: 'bg-blue-100',
          title: 'New order received',
          description: 'Order #12345 has been placed and is awaiting confirmation.',
          time: '2 hours ago',
          isUnread: true
        },
        {
          icon: 'transactions',
          iconBg: 'bg-emerald-100',
          title: 'Payment successful',
          description: 'Payment for order #12344 has been processed successfully.',
          time: '5 hours ago'
        }
      ]
    },
    {
      title: 'Yesterday',
      notifications: [
        {
          icon: 'blog',
          iconBg: 'bg-purple-100',
          title: 'New blog post published',
          description: '"10 Tips for Better Product Management" is now live.',
          time: 'Yesterday at 4:30 PM'
        },
        {
          icon: 'customers',
          iconBg: 'bg-amber-100',
          title: 'New user registration',
          description: 'John Doe has created a new account.',
          time: 'Yesterday at 2:15 PM'
        }
      ]
    }
  ];

  markAllAsRead(): void {
    this.notificationGroups.forEach(group => {
      group.notifications.forEach(notification => {
        notification.isUnread = false;
      });
    });
  }
}

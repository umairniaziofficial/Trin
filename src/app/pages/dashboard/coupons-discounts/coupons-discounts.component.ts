import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coupons-discounts',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './coupons-discounts.component.html',
  styleUrl: './coupons-discounts.component.scss'
})
export class CouponsDiscountsComponent {
  coupons = [
    {
      code: 'SUMMER2024',
      description: 'Summer season special discount on all products',
      status: 'Active',
      date: 'Aug 31, 2024',
      discount: '20%',
      showDropdown: false
    },
    {
      code: 'NEWUSER50',
      description: 'Welcome discount for new customers',
      status: 'Scheduled',
      date: 'Jul 1, 2024',
      discount: '50%',
      showDropdown: false
    },
    {
      code: 'WINTER2023',
      description: 'Winter collection clearance sale',
      status: 'Expired',
      date: 'Dec 31, 2023',
      discount: '30%',
      showDropdown: false
    }
  ];

  toggleDropdown(coupon: any) {
    // Close all other dropdowns
    this.coupons.forEach(c => {
      if (c !== coupon) {
        c.showDropdown = false;
      }
    });
    // Toggle the clicked dropdown
    coupon.showDropdown = !coupon.showDropdown;
  }

  editCoupon(coupon: any) {
    // TODO: Implement edit functionality
    console.log('Editing coupon:', coupon.code);
    coupon.showDropdown = false;
  }

  duplicateCoupon(coupon: any) {
    const newCoupon = {
      ...coupon,
      code: `${coupon.code}_COPY`,
      showDropdown: false
    };
    this.coupons.push(newCoupon);
    coupon.showDropdown = false;
  }

  toggleCouponStatus(coupon: any) {
    if (coupon.status === 'Active') {
      coupon.status = 'Expired';
    } else {
      coupon.status = 'Active';
    }
    coupon.showDropdown = false;
  }

  deleteCoupon(coupon: any) {
    const index = this.coupons.indexOf(coupon);
    if (index > -1) {
      this.coupons.splice(index, 1);
    }
    coupon.showDropdown = false;
  }
}

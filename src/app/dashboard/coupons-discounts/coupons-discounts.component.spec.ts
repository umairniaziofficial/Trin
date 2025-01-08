import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsDiscountsComponent } from './coupons-discounts.component';

describe('CouponsDiscountsComponent', () => {
  let component: CouponsDiscountsComponent;
  let fixture: ComponentFixture<CouponsDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponsDiscountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponsDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

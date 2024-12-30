import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestProductsSectionComponent } from './latest-products-section.component';

describe('LatestProductsSectionComponent', () => {
  let component: LatestProductsSectionComponent;
  let fixture: ComponentFixture<LatestProductsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestProductsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestProductsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProductCardsSectionComponent } from './feature-product-cards-section.component';

describe('FeatureProductCardsSectionComponent', () => {
  let component: FeatureProductCardsSectionComponent;
  let fixture: ComponentFixture<FeatureProductCardsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureProductCardsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureProductCardsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

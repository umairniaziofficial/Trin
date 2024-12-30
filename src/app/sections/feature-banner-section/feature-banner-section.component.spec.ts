import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBannerSectionComponent } from './feature-banner-section.component';

describe('FeatureBannerSectionComponent', () => {
  let component: FeatureBannerSectionComponent;
  let fixture: ComponentFixture<FeatureBannerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureBannerSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureBannerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

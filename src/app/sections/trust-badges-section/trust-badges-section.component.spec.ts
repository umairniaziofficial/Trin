import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustBadgesSectionComponent } from './trust-badges-section.component';

describe('TrustBadgesSectionComponent', () => {
  let component: TrustBadgesSectionComponent;
  let fixture: ComponentFixture<TrustBadgesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustBadgesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustBadgesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

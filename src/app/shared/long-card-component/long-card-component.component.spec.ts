import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongCardComponentComponent } from './long-card-component.component';

describe('LongCardComponentComponent', () => {
  let component: LongCardComponentComponent;
  let fixture: ComponentFixture<LongCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

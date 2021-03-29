import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCheckoutComponent } from './main-checkout.component';

describe('MainCheckoutComponent', () => {
  let component: MainCheckoutComponent;
  let fixture: ComponentFixture<MainCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

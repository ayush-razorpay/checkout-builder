import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutBuilderComponent } from './checkout-builder.component';

describe('CheckoutBuilderComponent', () => {
  let component: CheckoutBuilderComponent;
  let fixture: ComponentFixture<CheckoutBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

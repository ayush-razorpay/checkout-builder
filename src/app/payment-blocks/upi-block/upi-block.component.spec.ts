import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiBlockComponent } from './upi-block.component';

describe('UpiBlockComponent', () => {
  let component: UpiBlockComponent;
  let fixture: ComponentFixture<UpiBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpiBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpiBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

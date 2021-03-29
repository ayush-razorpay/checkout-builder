import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggelSwitchComponent } from './toggel-switch.component';

describe('ToggelSwitchComponent', () => {
  let component: ToggelSwitchComponent;
  let fixture: ComponentFixture<ToggelSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggelSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggelSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

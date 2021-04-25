import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackConfigsComponent } from './callback-configs.component';

describe('CallbackConfigsComponent', () => {
  let component: CallbackConfigsComponent;
  let fixture: ComponentFixture<CallbackConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallbackConfigsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

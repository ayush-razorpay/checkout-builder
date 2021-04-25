import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalConfigsComponent } from './additional-configs.component';

describe('AdditionalConfigsComponent', () => {
  let component: AdditionalConfigsComponent;
  let fixture: ComponentFixture<AdditionalConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalConfigsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalConfigComponent } from './additional-config.component';

describe('AdditionalConfigComponent', () => {
  let component: AdditionalConfigComponent;
  let fixture: ComponentFixture<AdditionalConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

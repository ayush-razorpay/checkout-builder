import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaylaterBlockComponent } from './paylater-block.component';

describe('PaylaterBlockComponent', () => {
  let component: PaylaterBlockComponent;
  let fixture: ComponentFixture<PaylaterBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaylaterBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaylaterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

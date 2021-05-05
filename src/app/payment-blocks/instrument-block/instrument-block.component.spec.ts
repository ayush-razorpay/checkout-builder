import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentBlockComponent } from './instrument-block.component';

describe('InstrumentBlockComponent', () => {
  let component: InstrumentBlockComponent;
  let fixture: ComponentFixture<InstrumentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

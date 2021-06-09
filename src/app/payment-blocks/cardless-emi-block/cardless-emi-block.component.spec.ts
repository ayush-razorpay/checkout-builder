import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlessEmiBlockComponent } from './cardless-emi-block.component';

describe('CardlessEmiBlockComponent', () => {
  let component: CardlessEmiBlockComponent;
  let fixture: ComponentFixture<CardlessEmiBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardlessEmiBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardlessEmiBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetbankingBlockComponent } from './netbanking-block.component';

describe('NetbankingBlockComponent', () => {
  let component: NetbankingBlockComponent;
  let fixture: ComponentFixture<NetbankingBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetbankingBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetbankingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

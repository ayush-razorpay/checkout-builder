import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBlockComponent } from './wallet-block.component';

describe('WalletBlockComponent', () => {
  let component: WalletBlockComponent;
  let fixture: ComponentFixture<WalletBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

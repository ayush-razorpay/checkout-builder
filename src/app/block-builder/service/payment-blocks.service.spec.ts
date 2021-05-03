import { TestBed } from '@angular/core/testing';

import { PaymentBlocksService } from './payment-blocks.service';

describe('PaymentBlocksService', () => {
  let service: PaymentBlocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentBlocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BlockBuilderServiceService } from './block-builder-service.service';

describe('BlockBuilderServiceService', () => {
  let service: BlockBuilderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockBuilderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

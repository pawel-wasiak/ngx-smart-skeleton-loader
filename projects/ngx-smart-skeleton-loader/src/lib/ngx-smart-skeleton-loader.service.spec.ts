import { TestBed } from '@angular/core/testing';

import { NgxSmartSkeletonLoaderService } from './ngx-smart-skeleton-loader.service';

describe('NgxSmartSkeletonLoaderService', () => {
  let service: NgxSmartSkeletonLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSmartSkeletonLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

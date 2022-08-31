import { TestBed } from '@angular/core/testing';

import { NgxSharedService } from './ngx-shared.service';

describe('NgxSharedService', () => {
  let service: NgxSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

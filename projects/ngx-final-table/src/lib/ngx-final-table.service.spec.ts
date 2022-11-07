import { TestBed } from '@angular/core/testing';

import { NgxFinalTableService } from './ngx-final-table.service';

describe('NgxFinalTableService', () => {
  let service: NgxFinalTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFinalTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

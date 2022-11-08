import { TestBed } from '@angular/core/testing';

import { NgxFinalFormService } from './ngx-final-form.service';

describe('NgxFinalFormService', () => {
  let service: NgxFinalFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFinalFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OeService } from './oe.service';

describe('OeService', () => {
  let service: OeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

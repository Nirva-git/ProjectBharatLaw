import { TestBed } from '@angular/core/testing';

import { ResearchBookServiceService } from './research-book-service.service';

describe('ResearchBookServiceService', () => {
  let service: ResearchBookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchBookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

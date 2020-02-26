import { TestBed, async, inject } from '@angular/core/testing';

import { SecuGuard } from './secu.guard';

describe('SecuGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecuGuard]
    });
  });

  it('should ...', inject([SecuGuard], (guard: SecuGuard) => {
    expect(guard).toBeTruthy();
  }));
});

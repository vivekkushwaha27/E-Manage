import { TestBed } from '@angular/core/testing';

import { ShowEmployeesService } from './show-employees.service';

describe('ShowEmployeesService', () => {
  let service: ShowEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

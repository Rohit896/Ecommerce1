import { TestBed } from '@angular/core/testing';

import { DataStorageService } from './data-storage.service';

describe('DataStorageService', () => {
  let service: DataStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

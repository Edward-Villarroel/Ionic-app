import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ingresarGuard } from './ingresar.guard';

describe('ingresarGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ingresarGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

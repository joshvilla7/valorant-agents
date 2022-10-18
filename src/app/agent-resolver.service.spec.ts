import { TestBed } from '@angular/core/testing';

import { AgentResolverService } from './agent-resolver.service';

describe('AgentResolverService', () => {
  let service: AgentResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

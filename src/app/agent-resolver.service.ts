import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { AgentInterface } from './agent-list/agent'
import { AgentService } from './agent.service';

@Injectable({
  providedIn: 'root'
})
export class AgentResolverService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot): Observable<AgentInterface[]> {
    return this.agentService.getAgents();
  }

  constructor(private agentService: AgentService) { }
}


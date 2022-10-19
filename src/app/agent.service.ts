import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AgentInterface } from './agent-list/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private agentDB = 'api/agents/agents.json';

  constructor(private http: HttpClient) { }

  getAgents(): Observable<AgentInterface[]> {
    return this.http.get<AgentInterface[]>(this.agentDB);
  }

  // to get a single agent 
  getAgent(name: string): Observable<AgentInterface | undefined> {
    return this.getAgents()
    .pipe(
      map((agents: AgentInterface[]) => agents.find(a => a.agentName === name))
    );
  }
  
  
}

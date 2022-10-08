import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AgentService } from '../agent.service';
import { AgentInterface } from './agent';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit, OnDestroy {

  tableTitle: string = 'Meet The Agents';
  filteredAgents: AgentInterface[] = [];
  subbing!: Subscription;

  private _agentSearch: string = '';
  get agentSearch(): string {
    return this._agentSearch;
  }
  set agentSearch(value: string) {
    this._agentSearch = value;
    console.log('in setter:', value);
    this.filteredAgents = this.findAgent(value);
  }
  
  agents: AgentInterface[] = [];

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.subbing = this.agentService.getAgents().subscribe({
      next: agents => {this.agents = agents;
        this.filteredAgents = this.agents;
      },
    });
  }

  ngOnDestroy(): void {
    this.subbing.unsubscribe();
  }

  findAgent(findBy: string): AgentInterface[] {
    findBy = findBy.toLocaleLowerCase();
    return this.agents.filter((agent: AgentInterface) =>
    agent.agentName.toLocaleLowerCase().includes(findBy));
  }


}

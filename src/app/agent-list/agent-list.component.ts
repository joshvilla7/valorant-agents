import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AgentService } from '../agent.service';
import { AgentInterface } from './agent';
import { map } from 'rxjs';

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
  
  agents!: AgentInterface[];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    //prefetch data with resolver service so that agents data loads 
    //before navigating to agents route.
    this.subbing = this.route.data.subscribe((res: any) => {
      this.agents = res.agents;
      this.filteredAgents = this.agents;
    });
    // OLD --------------------------------------
    // this.subbing = this.agentService.getAgents().subscribe({
    //   next: agents => {this.agents = agents;
    //     this.filteredAgents = this.agents;
    //   },
    // });
  }

  ngOnDestroy(): void {
    this.subbing.unsubscribe();
  }

  findAgent(findBy: string): AgentInterface[] {
    findBy = findBy.toLocaleLowerCase();
    return this.agents.filter((agent: AgentInterface) =>
    agent.agentName.toLocaleLowerCase().includes(findBy));
  }

  // Technique to use async pipe w/o subscribing, but agent details disappear when clicked
  // agentDB = 'api/agents/agents.json';
  // users$: Observable<any> | undefined;
  // fetchAgents() {
  //   this.users$ = this.http
  //   .get<any>(this.agentDB)
  //   .pipe(map((results) => results))
  // }

}

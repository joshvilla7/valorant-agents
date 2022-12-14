import { Component, OnInit } from '@angular/core';
import { AgentService } from '../agent.service';
import { AgentInterface } from './agent';

//NgRx
import { Store } from '@ngrx/store';
import { getAgents, getAllAgents, AgentState } from '../state/agents/agents.reducer';
import * as AgentActions from '../state/agents/agents.actions';
import { State } from '../state/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit{

  tableTitle: string = 'Meet The Agents';
  filteredAgents: AgentInterface[] = [];
  agents!: AgentInterface[];
  // For Search Bar
  private _agentSearch: string = '';
  get agentSearch(): string {
    return this._agentSearch;
  }
  set agentSearch(value: string) {
    this._agentSearch = value;
    console.log('in setter:', value);
    this.filteredAgents = this.findAgent(value);
  }
  
  
  constructor(private agentService: AgentService, 
    private store: Store<State>) { }

  findAgent(findBy: string): AgentInterface[] {
    findBy = findBy.toLocaleLowerCase();
    return this.agents.filter((agent: AgentInterface) =>
    agent.agentName.toLocaleLowerCase().includes(findBy));
  }

  // agents$ = this.agentService.agents$;
  agents$!: Observable<AgentInterface[]>; 

  ngOnInit(): void {
    this.agents$ = this.store.select(getAllAgents);
    this.store.dispatch(AgentActions.loadAgents());
  }

  
  // OLD CODE without Reactive RxJS and async pipe technique
  // --------------------------------------------------------------------------
  // ngOnInit(): void {
  //   //prefetch data with resolver service so that agents data loads 
  //   //before navigating to agents route.
  //   this.subbing = this.route.data.subscribe((res: any) => {
  //     this.agents = res.agents;
  //     this.filteredAgents = this.agents;
  //   });
    // OLD --------------------------------------
    // this.subbing = this.agentService.getAgents().subscribe({
    //   next: agents => {this.agents = agents;
    //     this.filteredAgents = this.agents;
    //   },
    // });
  // }

  // ngOnDestroy(): void {
  //   this.subbing.unsubscribe();
  // }
  // subbing!: Subscription;
  
  // Technique to use async pipe w/o subscribing, but agent details disappear when clicked 
  // in service change getAgents() to a variable: 
  //  agents$: Observable<AgentInterface[]> = this.http.get<AgentInterface[]>(this.agentDB)

  // fetchAgent() {
  //   this.users$ = this.http
  //   .get<any>(this.agentDB)
  //   .pipe(map((results) => results))
  // }
  //agents$: Observable<AgentInterface[]> | undefined;
  //import agentService
  //OnInit() {this.agents$ = this.agentService.getAgents();}

}

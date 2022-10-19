import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '../agent.service';
import { AgentInterface } from '../agent-list/agent';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agent-lore',
  templateUrl: './agent-lore.component.html',
  styleUrls: ['./agent-lore.component.css']
})
export class AgentLoreComponent implements OnInit {

  loreTitle: string = 'Meet';
  agent: AgentInterface | undefined;
 
  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService,
    private router: Router) { }

  ngOnInit(): void {
     const name = this.route.snapshot.paramMap.get('name');
     if (name) {
      this.getAgent(name);
     }
   }

  goBack(): void {
    this.router.navigate(['/agents']);
  }

  getAgent(name: string): void {
    this.agentService.getAgent(name).subscribe({
      next: agent => this.agent = agent,
    });
  }

 }

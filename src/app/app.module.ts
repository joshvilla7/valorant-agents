import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AgentLoreComponent } from './agent-lore/agent-lore.component';
import { RouterModule } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { agentReducer } from './state/agents/agents.reducer';
import { AgentEffects } from './state/agents/agents.effects';


@NgModule({
  declarations: [
    AppComponent,
    AgentListComponent,
    AgentLoreComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'greeting', pathMatch: 'full' },
      { path: 'greeting', component: GreetingComponent},
      { path: 'agents', component: AgentListComponent }, 
      { path: 'agents/:name', component: AgentLoreComponent },
      { path: '**', redirectTo: 'agents', pathMatch: 'full' }
    ]),
    StoreModule.forRoot({agents: agentReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AgentEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

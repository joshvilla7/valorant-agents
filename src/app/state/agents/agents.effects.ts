import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs";
import { AgentService } from "src/app/agent.service";
import * as AgentActions from './agents.actions';

@Injectable()
export class AgentEffects {

    constructor(private actions$: Actions,
        private agentService: AgentService){}

    loadAgents$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AgentActions.loadAgents),
            mergeMap(() => this.agentService.getAgents().pipe(
                map(agents => AgentActions.loadAgentsSuccess({agents}))
            ))
        )
    })
}
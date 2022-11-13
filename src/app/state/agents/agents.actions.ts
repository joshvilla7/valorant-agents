import { createAction, props } from "@ngrx/store";
import { AgentInterface } from "src/app/agent-list/agent";

export const loadAgents = createAction(
    '[Agent Page] Load Agent List'
);

export const loadAgentsSuccess = createAction(
    '[Agent API] Agent Load Success',
    props<{agents: AgentInterface[]}>()
);

export const loadAgentsFailure = createAction(
    '[Agent API] Agent Load Fail',
    props<{error: string}>()
);
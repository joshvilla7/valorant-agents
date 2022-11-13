import { createReducer, createSelector, on } from "@ngrx/store";
import { AgentInterface } from "src/app/agent-list/agent";
import { State } from "../app.state";
import * as AgentActions from './agents.actions';

export interface AgentState {
    agents: AgentInterface[];
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: AgentState = {
    agents: [],
    error: '',
    status: 'pending',
};

//Selector Functions
export const getAgents = (state: State) => state.agents;
export const getAllAgents = createSelector(
    getAgents,
    (state: AgentState) => state.agents
);

export const agentReducer = createReducer(
    initialState,
    //trigger loading the agents
    on(AgentActions.loadAgents, (state) => ({...state, status: 'loading'})),
    //handle successfully loaded agents
    on(AgentActions.loadAgentsSuccess, (state, { agents}) => ({
        ...state,
        agents: agents,
        error: '',
        status: 'success',
    })),
    //handle agents load failure
    on(AgentActions.loadAgentsFailure, (state, {error}) => ({
        ...state, 
        error: error,
        status: 'error',
    }))
);
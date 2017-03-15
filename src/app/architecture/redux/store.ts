import { CounterActions } from './actions';

export interface IAppState {
    count: number;
}

export const INITIAL_STATE: IAppState = {
    count: 0
}

export function rootReducer(state: IAppState, action): IAppState {

    switch(action.type) {
        case CounterActions.INCREMENT: return { count: state.count + 1 };
        case CounterActions.DECREMENT: return { count: state.count - 1 };
    }

    return state;
}
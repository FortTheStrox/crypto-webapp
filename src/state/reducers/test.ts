import { ActionType } from "../actionTypes";
import { Action } from "../actions";
import reducers from ".";

const initialState = 0;

const reducer = (state: number = initialState, action: Action): number => {
    switch (action.type) {
        case ActionType.INCREMENT:
            return state + action.payload;
        default:
            return state
    }
}

export default reducer
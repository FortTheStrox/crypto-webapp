import { ActionType } from "./actionTypes";

interface incrementAction {
    type: ActionType.INCREMENT,
    payload: 1
};

export type Action = incrementAction;
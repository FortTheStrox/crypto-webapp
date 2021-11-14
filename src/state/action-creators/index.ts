import { Dispatch } from "react";
import { ActionType } from "../actionTypes";
import { Action } from "../actions";

export const incrementNumber = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.INCREMENT,
            payload: 1
        })
    }
}
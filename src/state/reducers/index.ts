import { combineReducers } from "redux";
import test from "./test";

const reducers = combineReducers({
    increment: test
})

export default reducers;

export type RootState = ReturnType<typeof reducers>
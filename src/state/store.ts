import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// redux middleware: https://redux.js.org/tutorials/fundamentals/part-4-store#middleware
// redux thunk middleware: https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware

export default createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);
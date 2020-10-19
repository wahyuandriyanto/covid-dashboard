import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import './action/action';
import dataCovid from './reducer/reducer';

export const reducer = combineReducers({
    dataCovid
})

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

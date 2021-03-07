import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { exampleReducer } from "./reducers/exampleReducers";
import { modalReducer } from "./reducers/modalReducer.js";

import { userReducer } from "./reducers/userReducers";
import { habitAddReducer } from "./reducers/habitAddReducer";
import { habitListReducer } from "./reducers/habitListReducer";

const reducer = combineReducers({
    exampleReducer,
    modalReducer,
    userReducer,
    habitAddReducer,
    habitListReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

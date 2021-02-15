import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { exampleReducer } from "./reducers/exampleReducers";
import { modalReducer } from './reducers/index.js'

const reducer = combineReducers({
    exampleReducer,
    modalReducer
});

const initialState = {
  
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;


import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import reducer from "./reducers/reducer";

// initial states here
const initalState = {
  todos:[],
};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);


const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
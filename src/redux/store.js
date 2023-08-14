import { createStore, combineReducers } from "redux";
import reducers from "./reducers/reducers";

const rootReducers = combineReducers({ reducers });

const store = createStore(rootReducers);

export default store;

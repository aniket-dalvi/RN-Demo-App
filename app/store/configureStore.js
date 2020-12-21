import { combineReducers, createStore } from "redux";
import { UserDetailsReducer } from "../store/reducers/UserDetailsReducer";

const rootReducer = combineReducers({
  user: UserDetailsReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
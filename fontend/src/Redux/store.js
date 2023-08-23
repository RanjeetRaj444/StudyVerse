import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./Admin_Redux/reducer";
const rootResucer = combineReducers({
	reducer,
});

export const store = legacy_createStore(rootResucer, applyMiddleware(thunk));

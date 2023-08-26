import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as admin_Reducer } from "./Admin_Redux/reducer";
import userReducer from './User_Redux/reducer';
const rootResucer = combineReducers({
	admin_Reducer,
	user: userReducer,
});

export const store = legacy_createStore(rootResucer, applyMiddleware(thunk));

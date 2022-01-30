import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from "./reducers/postReducer";
import thunk from "redux-thunk";

export const rootReducers = combineReducers({
    post: postReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk))
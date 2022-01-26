import {combineReducers, createStore} from "redux";
import {postReducer} from "./reducers/postReducer";

export const rootReducers = combineReducers({
    post: postReducer
})

export const store = createStore(rootReducers)
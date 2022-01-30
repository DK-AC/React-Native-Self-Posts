import {ADD_POST, CHANGE_POST_BOOKED, DELETE_POST, LOAD_POSTS} from "../types/types";
import {DB} from "../../database";

export const loadPostsAC = () => {
    return async dispatch => {
        const posts = await DB.getPosts()
        dispatch({type: LOAD_POSTS, payload: posts})
    }
}

export const changeBookedAC = (id) => {
    return {type: CHANGE_POST_BOOKED, payload: id}
}

export const deletePostAC = (id) => {
    return {type: DELETE_POST, payload: id}
}

export const addPostAC = (post) => {
    post.id = Date.now().toString()
    return {type: ADD_POST, payload: post}
}
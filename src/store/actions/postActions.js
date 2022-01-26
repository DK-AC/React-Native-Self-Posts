import {DATA} from "../../data";
import {CHANGE_POST_BOOKED, DELETE_POST, LOAD_POSTS} from "../types/types";

export const loadPostsAC = () => {
    return {
        type: LOAD_POSTS, payload: DATA
    }
}

export const changeBookedAC = (id) => {
    return {
        type: CHANGE_POST_BOOKED, payload: id
    }
}

export const deletePostAC = (id) => {
    return {
        type: DELETE_POST, payload: id
    }
}
import {postTypes} from "../types/types";

let initialState = {
    post: [],
    booked: []
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case postTypes.LOAD_POSTS:
            return {
                ...state,
                posts: action.payload,
                booked: action.payload.filter(post => post.booked)
            }

        default:
            return state
    }
}



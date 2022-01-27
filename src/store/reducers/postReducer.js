import {ADD_POST, CHANGE_POST_BOOKED, DELETE_POST, LOAD_POSTS} from "../types/types";

let initialState = {
    allPosts: [],
    bookedPosts: []
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                allPosts: action.payload,
                bookedPosts: action.payload.filter(post => post.booked)
            }
        case CHANGE_POST_BOOKED:
            const allPosts = state.allPosts.map(post => {
                if (post.id === action.payload) {
                    post.booked = !post.booked
                }
                return post
            })

            return {
                ...state,
                allPosts,
                bookedPosts: allPosts.filter(post => post.booked)
            }
        case DELETE_POST:
            return {
                ...state,
                allPosts: state.allPosts.filter(post => post.id !== action.payload),
                bookedPosts: state.bookedPosts.filter(post => post.id !== action.payload),
            }
        case ADD_POST:
            return {
                ...state,
                allPosts: [{...action.payload}, ...state.allPosts],
            }
        default:
            return state
    }
}



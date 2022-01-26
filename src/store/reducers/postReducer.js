import {postActions} from "../actions/postActions";

let initialState = {};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'CHANGE_POST_BOOKED':
        //     return state.map(post => post.id === action.id
        //             ? {...post, booked: action.booked}
        //             : post)

        default:
            return state
    }
}


export const changedBookedAC = (id, booked) => {
    return {
        type: postActions.CHANGE_POST_BOOKED, id, booked
    }
}
import {postTypes} from "../types/types";
import {DATA} from "../../data";

export const loadPostsAC = () => {
    return {
        type: postTypes.LOAD_POSTS, payload: DATA
    }
}

// export const changeBookedAC = (id, booked) => {
//     return {
//         type: postTypes.CHANGE_POST_BOOKED, id, booked
//     }
// }
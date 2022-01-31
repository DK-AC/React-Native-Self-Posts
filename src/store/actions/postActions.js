import * as FileSystem from 'expo-file-system'
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

export const addPostAC = post => async dispatch => {
    const fileName = post.img.split('/').pop()
    const newPath = FileSystem.documentDirectory + fileName

    try {
        await FileSystem.moveAsync({
            to: newPath,
            from: post.img
        })
    } catch (e) {
        console.log('Error:', e)
    }

    const payload = {...post, img: newPath}
    const id = await DB.createPost(payload)

    payload.id = id

    dispatch({type: ADD_POST, payload})
}
import * as api from "../api/index";
import { FETCH_ALL, CREATE, UPDATE, LIKE, DELETE} from "../constants/actionTypes"

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchallnotes();
        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createnotes(post);
        dispatch({type: CREATE , payload: data})

    } catch (error) {
        console.log(error);
    }
}

export const updateNotes = (id, notes) => async (dispatch) => {
        try {
            const { data } = await api.updatenotes(id, notes);
            dispatch({ type: UPDATE, payload: data })
        } catch (error) {
            console.log({error});
        }
}
export const likeNotes = (id, notes) => async (dispatch) => {
        try {
            const { data } = await api.likenotes(id, notes);
            dispatch({ type: LIKE, payload: data })
        } catch (error) {
            console.log({error});
        }
}

// this is comment id
export const deleteNotes = (id) => async (dispatch) => {
    try {
        await api.deletenotes(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log({error});
    }
}
// import { combineReducers } from 'redux'
import * as types from '../types'

export const initialState = {
    app: `readable`,
    user: `reningtonneri`,
    posts: [],
    errors: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_POSTS:
            return {
                ...state, 
                posts: action.posts
            }
        default:
            return state
    }
}

export default reducer;
// import { combineReducers } from 'redux'
import * as types from '../types'

export const initialState = {
    app: `readable`,
    user: `reningtonneri`,
    posts: [],
    categories: [],
    errors: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_POSTS:
            return {
                ...state, 
                posts: action.posts
            }
        case types.FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        default:
            return state
    }
}

export default reducer;
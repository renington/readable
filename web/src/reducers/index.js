// import { combineReducers } from 'redux'
import * as types from '../types'

export const initialState = {
    app: `readable`,
    user: `reningtonneri`,
    posts: [],
    categories: [],
    post: [],
    comments: [],
    errors: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_POSTS:
        case types.FETCH_POSTS_BY_CATEGORY:
            return {
                ...state, 
                posts: action.posts
            }  
        case types.FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        case types.FETCH_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        case types.FETCH_POST:
            return {
                ...state,
                post: action.post,
                comments: []
            }
        case types.CLEAR_POSTS:
            return {
                ...state,
                posts: []
            }
        case types.CREATE_POST:
            return {
                ...state,
                posts: state.posts.concat(action.post)
            }
        case types.DELETE_POST:
            var postsTemp = state.posts.map(function(post){return (post.id == action.post.id) ? action.post : post})

            return {
                ...state,
                posts: postsTemp
            }
        default:
            return state
    }
}

export default reducer;
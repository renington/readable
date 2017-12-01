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
        case types.CREATE_COMMENT:
            return {
                ...state,
                comments: state.comments.concat(action.comment)
            }
        case types.DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments && state.comments.map(function(comment){return (comment.id === action.comment.id) ? action.comment : comment})
            }
        case types.VOTE_COMMENT:
            return {
                ...state,
                comments: state.comments && state.comments.map(function(comment){return (comment.id === action.comment.id) ? action.comment : comment})
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
        case types.EDIT_POST:
            return {
                ...state,
                posts: state.posts && state.posts.map(function(post){return (post.id === action.post.id) ? action.post : post})
            }
        case types.DELETE_POST:
            return {
                ...state,
                posts: state.posts && state.posts.map(function(post){return (post.id === action.post.id) ? action.post : post})
            }
        case types.VOTE_POST:
            return {
                ...state,
                posts: state.posts && state.posts.map(function(post){return (post.id === action.post.id) ? action.post : post}),
                post: action.post
            }
        default:
            return state
    }
}

export default reducer;
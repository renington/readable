// import { combineReducers } from 'redux'

export const initialState = {
    app: `readable`,
    user: `reningtonneri`,
    posts: [],
    errors: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return {
                ...state, 
                posts: action.posts
            }
        default:
            return state
    }
}

export default reducer;
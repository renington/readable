// import { combineReducers } from 'redux'

export const initialState = {
    app: `readable`,
    user: `reningtonneri`,
    posts: [],
    errors: []
}

const reducer = (state = initialState, action) => {
    return {
        ...state
      }
}

export default reducer;
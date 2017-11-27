import * as types from '../types'
import axios from 'axios' 
axios.defaults.headers.common['Authorization'] = 'auth-string';

export const fetchComments = (parentId,dispatch) => {
  return (dispatch) => {
    axios.get(`${types.API_HOST}/posts/${parentId}/comments`)
    .then((commentsResponse) => {
      dispatch({ type: types.FETCH_COMMENTS, comments: commentsResponse.data, parentId })
    })
    .catch((commentsError) => { 
      dispatch({ errors: commentsError })
    })
  }
}

export const createPost = (comment, dispatch) => {
  return (dispatch) => {
    axios.post(`${c.API}/comments/`, comment)
    .then((response) => { 
      dispatch({ type: types.CREATE_COMMENT, post: comment }) 
    })
    .catch((error) => { 
      dispatch({ errors: error })
    })
  }
}
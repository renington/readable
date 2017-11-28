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

export const createComment = (comment, dispatch) => {
  return (dispatch) => {
    axios.post(`${types.API_HOST}/comments/`, comment)
    .then((response) => { 
      dispatch({ type: types.CREATE_COMMENT, comment: comment }) 
    })
    .catch((error) => { 
      dispatch({ errors: error })
    })
  }
}

export const voteComment = (id, optionSelected, dispatch) => {
  return (dispatch) => {
    axios.post(`${types.API_HOST}/comments/${id}`, {option: optionSelected})
    .then((response) => { 
      dispatch({ type: types.VOTE_COMMENT, comment: response.data }) 
    })
    .catch((error) => { 
      dispatch({ errors: error })
    })
  }
}
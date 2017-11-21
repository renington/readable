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
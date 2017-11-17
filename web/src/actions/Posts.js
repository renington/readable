import * as types from '../types'
import axios from 'axios' 
axios.defaults.headers.common['Authorization'] = 'auth-string';

export const fetchPosts = (dispatch) => {
  return (dispatch) => {
    axios.get(`${types.API_HOST}/posts`)
    .then((postsResponse) => {
      dispatch({ type: types.FETCH_POSTS, posts: postsResponse.data })
    })
    .catch((postsError) => { 
      dispatch({ errors: postsError })
    })
  }
}
import * as types from '../types'

import axios from 'axios' 
axios.defaults.headers.common['Authorization'] = 'auth-string';

const api = 'http://localhost:3001';

export const fetchPosts = (dispatch) => {
  return (dispatch) => {
    const request = axios.get(`${api}/posts`)
    .then((postsResponse) => {
      dispatch({ type: types.FETCH_POSTS, posts: postsResponse.data })
    })
    .catch((postsError) => { 
      dispatch({ errors: postsError})
    })
  }
}
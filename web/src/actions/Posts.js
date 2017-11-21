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

export const fetchPost = (postId, dispatch) => {
  return (dispatch) => {
    axios.get(`${types.API_HOST}/posts/${postId}`)
    .then((postResponse) => {
      dispatch({type: types.FETCH_POST, post: postResponse.data})
    })
    .catch((postError) => {
      dispatch({ errors: postError })
    })
  }
}

export const fetchPostsByCategory = (category, dispatch) => {
  return (dispatch) => {
    axios.get(`${types.API_HOST}/${category}/posts`)
    .then((postsResponse) => {
      dispatch({type: types.FETCH_POSTS_BY_CATEGORY, posts: postsResponse.data})
    })
    .catch((postsError) => {
      dispatch({ errors: postsError })
    })
  }
}


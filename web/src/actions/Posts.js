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
      
      axios.get(`${types.API_HOST}/posts/${postId}/comments`)
      .then((commentsResponse) => {
        dispatch({ type: types.FETCH_COMMENTS, comments: commentsResponse.data, postId })
      })
      .catch((commentsError) => { 
        dispatch({ errors: commentsError })
      })
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
      dispatch({ type: types.FETCH_POSTS_BY_CATEGORY, posts: postsResponse.data })
    })
    .catch((postsError) => {
      dispatch({ errors: postsError })
    })
  }
}

export const createPost = (post, dispatch) => {
  return (dispatch) => {
    axios.post(`${types.API_HOST}/posts/`, post)
    .then((response) => { 
      dispatch({ type: types.CREATE_POST, post: response.data }) 
    })
    .catch((error) => { 
      dispatch({ errors: error })
    })
  }
}

export const deletePost = (post, dispatch) => {
  return (dispatch) => {
    axios.delete(`${types.API_HOST}/posts/${post.id}`)
    .then((postResponse) => { 
      dispatch({ type: types.DELETE_POST, post: post }) 
    })
    .catch((error) => { 
      dispatch({ errors: error })
    })
  }
}

export const votePost = (id, optionSelected, dispatch) => {
  return (dispatch) => {
    axios.post(`${types.API_HOST}/posts/${id}`, {option: optionSelected})
    .then((response) => { 
      dispatch({ type: types.VOTE_POST, post: response.data }) 
    })
    .catch((error) => { 
      dispatch({ errors: error })
    })
  }
}

export const editPost = (post, dispatch) => {
  return (dispatch) => {
    axios.put(`${types.API_HOST}/posts/${post.id}`, {title: post.title, body: post.body})
    .then((response) => { 
      dispatch({ type: types.EDIT_POST, post: response.data }) 
    })
    .catch((error) => { 
      dispatch({ errors: error })
    })
  }
}

export const clearPosts = () => ({ type: types.CLEAR_POSTS });

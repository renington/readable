import axios from 'axios'
const api = 'http://localhost:3001';

export const getPosts = () => {
    return (dispatch) => {
        dispatch(fetchInitialDataRequest())
        return axios.get(`${c.API}/posts`)
        .then((postsResponse) => {
            const posts = postsResponse.data.filter(post => (post.deleted === false || parentIds.includes(post.id)))
              .reduce((posts, post) => ({ ...posts, [post.id]: post }), {})
            dispatch(posts)
        })
        .catch((postsError) => { 
            dispatch(console.log(postsError)) 
        })
    }
  }
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import PostList from '../components/PostList'

const getVisiblePosts = (posts, filter) => {
    if(filter != null){
        return posts.filter(p => p.deleted != false && p.category == filter)
    }

    return posts.filter(p => p.deleted != false);
}

const mapStateToProps = state => {
  return {
    posts: getVisiblePosts(state.posts, state.posts.category)
  }
}

export default VisiblePostList
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions/Posts'
import PostItem from './PostItem'

class PostList extends Component {
    componentDidMount () {
        this.props.dispatch(fetchPosts())
    }

    render() {
        const { posts } = this.props;
        
        return (
            <div className="post-list">
                {posts && posts.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
        );
    }
}



const mapStateToProps = state => ({ posts: state.posts });

const mapDispatchToProps = (dispatch, fetchPosts) => ({
    dispatch,
    fetchPosts
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
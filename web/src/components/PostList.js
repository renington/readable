import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//import { bindActionCreators } from 'redux'
import PostItem from './PostItem'
import {withRouter} from 'react-router-dom'

class PostList extends Component {
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

export default withRouter(PostList);
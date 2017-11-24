import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//import { bindActionCreators } from 'redux'
import PostItem from './PostItem'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class PostList extends Component {
    render() {
        const { posts } = this.props;
        
        return (
            <div className="post-list">
                {posts.length > 0 && posts.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
        );
    }
}

export default withRouter(connect(null, null)(PostList));
import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import PostItem from './PostItem'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class PostList extends Component {
    render() {
        const { posts } = this.props;
        
        return (
            <div className="container post-list">
                {this.getPosts(posts)}
            </div>
        )
    }

    getPosts = (posts) => {
        if(posts){
            return (
                posts && posts.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))
            )
        }
    }
}

export default withRouter(connect(null, null)(PostList));
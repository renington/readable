import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PostItem from './PostItem'
import PropTypes from 'prop-types';

const PostList = ({posts}) => {
    let getPosts = (posts) => {
        if(posts){
            return (
                posts && posts.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))
            )
        }
    }

    return (
        <div className="container post-list">
            {getPosts(posts)}
        </div>
    )

}

PostList.PropTypes = {
    posts: PropTypes.array.isRequired
}

export default PostList
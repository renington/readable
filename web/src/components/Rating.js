import React from 'react'
import ChevUp from 'react-icons/lib/fa/chevron-up'
import ChevDown from 'react-icons/lib/fa/chevron-down'
import { votePost } from '../actions/Posts'
import PropTypes from 'prop-types'

const Rating = ({ post, dispatch }) => {
    const handleIncreaseVote = (e) => {
        dispatch(votePost(post.id, 'upVote'))
    }

    const handleDecreaseVote = (e) => {
        dispatch(votePost(post.id, 'downVote'))
    }

    const getPost = (post) => {
        if(post){
            return (
                <div>
                    <div className="rating-up"><ChevUp size={20} onClick={handleIncreaseVote} /></div>
                    <div className="rating-value">{post.voteScore}</div>
                    <div className="rating-down"><ChevDown  size={20} onClick={handleDecreaseVote} /></div>
                </div>
            )
        }
    }

    return (
        <div className="col-sm-1 vote">
            {getPost(post)}
        </div>
    )
}

Rating.PropTypes = {
    post: PropTypes.object.isRequired
}

export default Rating;
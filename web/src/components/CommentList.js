import React from 'react'
import PropTypes from 'prop-types'
import CommentItem from './CommentItem'

const CommentList = ({ comments, dispatch }) => {
    return (
        <div className="row comments">
            {comments && comments.map( (comment) => (
                <CommentItem comment={comment} dispatch={dispatch} />
            ))}
        </div>
    )
}

CommentList.PropTypes = {
    comments: PropTypes.array.isRequired,
    dispatch: PropTypes.object.isRequired
}

export default CommentList;
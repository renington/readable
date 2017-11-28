import React from 'react'
import Rating from './Rating'
import TimeAgo from 'react-timeago'
import PropTypes from 'prop-types'

const CommentList = ({ comments, dispatch }) => {
    return (
        <div className="row comments">
            {comments && comments.map( (comment) => (
                <div key={comment.id} className="row comment">
                    <Rating item={comment} type={"comment"} dispatch={dispatch} />
                    <div className="col-sm-11" key={comment.id}>
                        <div className="content">{comment.body}</div>
                        <div className="action">Comment by <a href="">{comment.author} </a> - {<TimeAgo date={comment.timestamp} />}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

CommentList.PropTypes = {
    comments: PropTypes.array.isRequired,
    dispatch: PropTypes.object.isRequired
}

export default CommentList;
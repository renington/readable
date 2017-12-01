import React, { Component } from 'react'
import Rating from './Rating'
import TimeAgo from 'react-timeago'
import PropTypes from 'prop-types'

class CommentItem extends Component {
    render() {
        const { comment, dispatch } = this.props;

        return (
            <div className="row comment">
                <Rating item={comment} type={"comment"} dispatch={dispatch} />
                <div className="col-sm-11">
                    <div className="content">{comment.body}</div>
                    <div className="action">Comment by <a href="">{comment.author} </a> - {<TimeAgo date={comment.timestamp} />}</div>
                </div>
            </div>
        )
    }

    PropTypes = {
        comment: PropTypes.array.isRequired,
        dispatch: PropTypes.object.isRequired
    }
}

export default CommentItem;
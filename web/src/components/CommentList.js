import React, {Component} from 'react'
import Rating from './Rating'
import TimeAgo from 'react-timeago'
// import PropTypes from 'prop-types'

class CommentList extends Component {
    render() {
        const { comments } = this.props;
        
        return (
            <div className="row comments">
                {comments && comments.map( (comment) => (
                    <div key={comment.id} className="row comment">
                        <Rating item={comment} type={"comment"} dispatch={this.props.dispatch} />
                        <div className="col-sm-11" key={comment.id}>
                            <div className="content">{comment.body}</div>
                            <div className="action">Comment by <a href="">{comment.author} </a> - {<TimeAgo date={comment.timestamp} />}</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default CommentList;
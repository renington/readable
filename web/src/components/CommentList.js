import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import Rating from './Rating'

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
                            <div className="action">Comment by <a href="">{comment.author} </a></div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default CommentList;
import React, { Component } from 'react'
import Rating from './Rating'
import TimeAgo from 'react-timeago'
import PropTypes from 'prop-types'
import { deleteComment } from '../actions/Comments.js'
import { connect } from 'react-redux'

class CommentItem extends Component {
    constructor(props){
        super(props);
    }

    handleDelete = (e) => { 
        this.props.comment.delete = true;
        console.log(this.props.comment.delete)
        this.props.dispatch(deleteComment(this.props.comment))
    }

    render() {
        const { comment, dispatch } = this.props;

        return (
            <div className="row comment">
                <Rating item={comment} type={"comment"} dispatch={dispatch} />
                <div className="col-sm-11">
                    <div className="content">{comment.body}</div>
                    <div className="action">Comment by <a href="">{comment.author} </a> - {<TimeAgo date={comment.timestamp} />}</div> <a onClick={() => { this.handleDelete(comment) }}> delete </a>
                </div>
            </div>
        )
    }

    PropTypes = {
        comment: PropTypes.array.isRequired,
        dispatch: PropTypes.object.isRequired
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, deleteComment) => ({
    dispatch,
    deleteComment
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem)
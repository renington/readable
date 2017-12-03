import React, { Component } from 'react'
import Rating from './Rating'
import TimeAgo from 'react-timeago'
import PropTypes from 'prop-types'
import { deleteComment } from '../actions/Comments.js'
import { connect } from 'react-redux'
import EditComment from './EditComment'

class CommentItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            editMode: false
        }
    }

    handleDelete = (e) => { 
        this.props.comment.delete = true;
        console.log(this.props.comment.delete)
        this.props.dispatch(deleteComment(this.props.comment))
    }

    handleEdit = (e) => {
        this.setState({ editMode: true })
    }

    changeHideEditForm = () => {
        this.setState({ editMode: false });
    }

    render() {
        const { comment, dispatch } = this.props;

        if(!this.state.editMode){
            return (
                <div className="row comment">
                <Rating item={comment} type={"comment"} dispatch={dispatch} />
                <div className="col-sm-11">
                    <div className="content">{comment.body}</div>
                    <div className="action">Comment by <a href="">{comment.author} </a> - {<TimeAgo date={comment.timestamp} />} | <a onClick={() => { this.handleEdit(this) }}> edit </a> | <a onClick={() => { this.handleDelete(this) }}> delete </a></div>
                </div>
            </div>
            )
        }else{
            return <EditComment comment={comment} changeHideEditForm={this.changeHideEditForm} />
        }
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
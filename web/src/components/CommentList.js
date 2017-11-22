import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { fetchComments } from '../actions/Comments'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Rating from './Rating'

class CommentList extends Component {
    componentDidMount() {
        const { parentId, dispatch } = this.props
        this.props.dispatch(fetchComments(parentId))
    }

    render() {
        const { comments } = this.props;
        console.log(comments);
        return (
            <div className="row comments">
                {comments && comments.map( (comment) => (
                    <div className="row comment">
                        <Rating rating={comment.voteScore} />
                        <div className="col-sm-11" key={comment.id}>
                            <div className="content">{comment.body}</div>
                            <div className="action">Comment by <a href="#">{comment.author} </a></div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({ comments: state.comments });

const mapDispatchToProps = (dispatch, fetchComments) => ({
    dispatch,
    fetchComments
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentList));
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { fetchComments } from '../actions/Comments'
import { connect } from 'react-redux'

class CommentList extends Component {
    componentDidMount() {
        const { parentId, dispatch } = this.props
        this.props.dispatch(fetchComments(parentId))
    }

    render() {
        return (
            <div className="row comments">
                <div className="col-sm-offset-2 col-sm-10">
                    <h2>Title comment</h2>
                    <div className="content">Comments</div>
                    <div className="action">
                        Comment by <a href="#">author </a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ comments: state.comments });

const mapDispatchToProps = (dispatch, fetchComments) => ({
    dispatch,
    fetchComments
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
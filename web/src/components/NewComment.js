import React, { Component } from 'react'
import { v1 as uuid } from 'uuid'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createComment } from '../actions/Comments'

class NewComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            parentId: this.props.parentId,
            author: 'anonymous'
          }
    }
    
    submitNewComment = (e) => {
        const { parentId, body, author } = this.state

        if (body !== '') {
            const comment = {
                id: uuid(),
                parentId,
                timestamp: Date.now(),
                body,
                author,
                voteScore: 1,
                deleted: false,
                parentDeleted: false,
            }

            this.props.dispatch(createComment(comment))
            this.setState({ body: '' })
        }
    }

    handleBodyChange = (e) => { this.setState({ body: e.target.value })}
    
    render(){
        const { body } = this.state

        return (
            <div className="row">
                <div className="container">
                    <form className="box-form" >
                        <div className="form-group">
                            <label htmlFor="body">Comment</label>
                            <textarea className="form-control" rows="3" value={body} onChange={this.handleBodyChange.bind(this)} placeholder="Type text here"></textarea>
                        </div>
                        <button type="button" className="btn btn-success" onClick={this.submitNewComment.bind(this)}>SAVE</button> 
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ comments: state.comments });

const mapDispatchToProps = (dispatch, createComment) => ({
    dispatch,
    createComment
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewComment));
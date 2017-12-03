import React, { Component } from 'react'
import { editComment } from '../actions/Comments'
import { connect } from 'react-redux'

class EditComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.comment.id,
            body: this.props.comment.body,
        }
    
        this.submitEditComment = this.submitEditComment.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
    }
    
    handleBodyChange = (e) => { this.setState({ body: e.target.value })}
    submitEditComment = (e) => {
        const { id, body } = this.state

          const comment = {
            id,
            body
          }

          this.props.dispatch(editComment(comment))
          this.props.changeHideEditForm()
    }

    render() {
        const { body } = this.state;

        return (
            <div className="container">
                <form className="box-form" >
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <textarea className="form-control" rows="3" value={body} onChange={this.handleBodyChange} placeholder="Type text here">{body}</textarea>
                    </div>
                    <button type="button" className="btn btn-success" onClick={this.submitEditComment}>SAVE</button> 
                    <button type="button" className="btn btn-default pull-right" onClick={this.props.changeHideEditForm}>CANCEL</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({ });

const mapDispatchToProps = (dispatch, editComment) => ({
    dispatch,
    editComment
})

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);
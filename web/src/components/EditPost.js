import React, { Component } from 'react'
import { editPost } from '../actions/Posts'
import { connect } from 'react-redux'

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.post.id,
            title: this.props.post.title,
            body: this.props.post.body,
            showFormNewPost: false
          }
    
        this.submitEditPost = this.submitEditPost.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
    }
    
    handleTitleChange = (e) => { this.setState({ title: e.target.value })}
    handleBodyChange = (e) => { this.setState({ body: e.target.value })}
    submitEditPost = (e) => {
        const { id, title, body } = this.state

        if (title !== '' && body !== '') {
          const post = {
            id,
            title,
            body
          }

          this.props.dispatch(editPost(post))
          this.props.changeHideEditForm()
        }
    }

    render() {
        const { title, body } = this.state;

        return (
            <div className="container">
                <form className="box-form" >
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" value={title} onChange={this.handleTitleChange} placeholder="Type the title here" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <textarea className="form-control" rows="3" value={body} onChange={this.handleBodyChange} placeholder="Type text here">{body}</textarea>
                    </div>
                    <button type="button" className="btn btn-success" onClick={this.submitEditPost}>SAVE</button> 
                    <button type="button" className="btn btn-default pull-right" onClick={this.props.changeHideEditForm}>CANCEL</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({ });

const mapDispatchToProps = (dispatch, editPost) => ({
    dispatch,
    editPost
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
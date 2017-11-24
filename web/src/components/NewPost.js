import React, { Component } from 'react'
import { v1 as uuid } from 'uuid'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {createPost} from '../actions/Posts'

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            category: '',
            author: 'anonymous'
          }
    
        this.submitNewPost = this.submitNewPost.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    handleTitleChange = (e) => { this.setState({ title: e.target.value })}
    handleBodyChange = (e) => { this.setState({ body: e.target.value })}
    handleCategoryChange = (e) => { this.setState({ category: e.target.value })}
    submitNewPost = (e) => {
        const { title, body, category, author } = this.state

        if (title !== '' && body !== '' && category !== '') {
          const timestamp = Date.now() 

          const post = {
            id: uuid(),
            title,
            body,
            author,
            category,
            timestamp,
            voteScore: 0,
            commentCount: 0,
            deleted: false
          }

          this.props.dispatch(createPost(post))
        }
      }

    render() {
        const { title, body, category } = this.state

        if(this.props.showForm){
            return (
                <div className="container">
                    <form className="box-form" >
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" value={title} onChange={this.handleTitleChange} placeholder="Type the title here" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <textarea className="form-control" rows="3" value={body} onChange={this.handleBodyChange} placeholder="Type text here"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Category</label>
                            <input type="text" className="form-control" id="title" value={category} onChange={this.handleCategoryChange} placeholder="Type React, Redux or Udacity" />
                        </div>
                        <button type="submit" className="btn btn-success" onClick={this.submitNewPost}>SAVE</button> 
                        <button type="button" className="btn btn-default pull-right" onClick={this.props.changeShowForm}>CANCEL</button>
                    </form>
                </div>
            )
        }else{
            return ( 
                <div className="container">
                    <div className="new-post-nav">
                        <button className='btn btn-success' onClick={this.props.changeShowForm}>NEW</button>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, createPost) => ({
    dispatch,
    createPost
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPost));
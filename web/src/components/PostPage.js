import React, { Component } from 'react'
import '../App.css';
import Header from './Header'
import { fetchPost } from '../actions/Posts'
import PostItem from './PostItem'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CommentList from './CommentList'
import NewComment from './NewComment'
import { SortBy } from '../helpers/util'

class PostPage extends Component {
    componentDidMount () {
        this.props.dispatch(fetchPost(this.props.match.params.postId))
    }
    
    render() {
        const { post } = this.props;
        
        return (
            <div className="App">
                <Header />
                {this.postItem(post)}
            </div>
        )
    }
    
    postItem(post){
        if(post !== null && post !== undefined){
            if(Object.keys(post).length > 0) {

                return (
                    <div className="container">
                        <PostItem post={post} />
                        <CommentList comments={SortBy(this.props.comments.filter(comment => comment.deleted !== true ))} dispatch={this.props.dispatch} />
                        <NewComment parentId={post.id} />
                    </div>
                ) 
            }
        }
    }
}

const mapStateToProps = state => ({ post: state.post, comments: state.comments });

const mapDispatchToProps = (dispatch, fetchPost) => ({
    dispatch,
    fetchPost
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage));
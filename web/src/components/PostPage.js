import React, { Component } from 'react'
import '../App.css';
import HeartO from 'react-icons/lib/fa/heart-o'
import Header from './Header'
import { fetchPost } from '../actions/Posts'
import PostItem from './PostItem'
import { connect } from 'react-redux';

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

                <footer className="footer">
                    <div className="container">
                        <p className="text-muted">Built with <HeartO /></p>
                    </div>
                </footer>
            </div>
        )
    }

    postItem(post){
        if(post){
            return (
                <div className="container">
                    {<PostItem post={post} />}
                </div>
            ) 
        }
    }
}

const mapStateToProps = state => ({ post: state.post });

const mapDispatchToProps = (dispatch, fetchPost) => ({
    dispatch,
    fetchPost
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
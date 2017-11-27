import React, { Component } from 'react'
import '../App.css';
import PostList from './PostList'
import HeartO from 'react-icons/lib/fa/heart-o'
import Header from './Header'
import { fetchPosts } from '../actions/Posts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NewPost from './NewPost'

class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            showFormNewPost: false
        }
    }

    componentDidMount () {
        this.props.dispatch(fetchPosts())
    }

    render(){
        return (
            <div className="App">
                <Header />

                <NewPost showForm={this.state.showFormNewPost} changeShowForm={this.changeShowForm} />

                {this.getPost(this.props.posts)}

                <footer className="footer">
                    <div className="container">
                        <p className="text-muted">Built with <HeartO /></p>
                    </div>
                </footer>
            </div>
        )
    }

    getPost = (posts) => {
        if(posts){
            return (
                <div className="container">
                    <PostList posts={posts.filter(post => post.deleted !== true )} />
                </div>
                )
        }
    }

    changeShowForm = () => {
        this.setState({
            showFormNewPost: !this.state.showFormNewPost
        });
    }
}

const mapStateToProps = state => ({ posts: state.posts });

const mapDispatchToProps = (dispatch, fetchPosts) => ({
    dispatch,
    fetchPosts
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
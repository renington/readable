import React, { Component } from 'react'
import '../App.css';
import PostList from './PostList'
import Header from './Header'
import { fetchPostsByCategory, clearPosts } from '../actions/Posts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Home extends Component {
    componentDidMount () {
        this.props.dispatch(fetchPostsByCategory(this.props.match.params.category))
    }

    componentWillUpdate(nextProps, nextState) {
        const currentCategory = this.props.match.params.category;
        const nextCategory = nextProps.match.params.category;
        
        if (currentCategory !== nextCategory) {
            this.props.dispatch(clearPosts())
            this.props.dispatch(fetchPostsByCategory(nextProps.match.params.category))
        }
      }

    render(){
        const { posts } = this.props;

        return (
            <div className="App">
                <Header />
                <PostList posts={posts} />
            </div>
        )
    }
}

const mapStateToProps = state => ({ posts: state.posts });

const mapDispatchToProps = (dispatch, fetchPosts, fetchPostsByCategory, clearPosts) => ({
    dispatch,
    fetchPosts,
    fetchPostsByCategory,
    clearPosts
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
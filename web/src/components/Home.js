import React, { Component } from 'react'
import '../App.css';
import PostList from './PostList'
import HeartO from 'react-icons/lib/fa/heart-o'
import CategoriesBar from './CategoriesBar'
import Header from './Header'
import { fetchPosts, fetchPostsByCategory } from '../actions/Posts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Home extends Component {
    componentDidMount () {
        this.props.dispatch(fetchPosts())
    }

    render(){
        return (
            <div className="App">
                <Header />

                <div className="container">
                    <PostList posts={this.props.posts} />
                </div>

                <footer className="footer">
                    <div className="container">
                        <p className="text-muted">Built with <HeartO /></p>
                    </div>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = state => ({ posts: state.posts });

const mapDispatchToProps = (dispatch, fetchPosts, fetchPostsByCategory) => ({
    dispatch,
    fetchPosts,
    fetchPostsByCategory
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
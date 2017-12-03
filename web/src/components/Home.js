import React, { Component } from 'react'
import '../App.css';
import PostList from './PostList'
import Header from './Header'
import { fetchPosts } from '../actions/Posts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NewPost from './NewPost'
import SortBar from './SortBar'
import { SortBy } from '../helpers/util'

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
                <SortBar />
                <NewPost showForm={this.state.showFormNewPost} changeShowForm={this.changeShowForm} />
                {this.getPost(this.props.posts)}
            </div>
        )
    }

    getPost = (posts) => {
        if(posts){
            return <PostList posts={SortBy(posts.filter(post => post.deleted !== true ), this.props.OrderBy)} />
        }
    }

    changeShowForm = () => {
        this.setState({
            showFormNewPost: !this.state.showFormNewPost
        });
    }
}

const mapStateToProps = state => ({ 
    posts: state.posts,
    OrderBy: state.OrderBy
});

const mapDispatchToProps = (dispatch, fetchPosts) => ({
    dispatch,
    fetchPosts
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
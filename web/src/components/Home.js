import React, { Component } from 'react'
import '../App.css';
import PostList from './PostList'
import HeartO from 'react-icons/lib/fa/heart-o'
import CategoriesBar from './CategoriesBar'
import Header from './Header'

class Home extends Component {
    render(){
        return (
            <div className="App">
                <Header />

                <div className="container">
                    <PostList />
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

export default Home;
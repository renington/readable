import React, { Component } from 'react'
import logo from '../logo.svg';
import '../App.css';
import CommentingO from 'react-icons/lib/fa/commenting-o'
import HeartO from 'react-icons/lib/fa/heart-o'
import PostList from './PostList'
import CategoriesBar from './CategoriesBar'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#"><CommentingO size={30} className='logo' /> readable</a>
                            </div>
                            <CategoriesBar />
                        </div>
                    </nav>
                </header>

                <div className="container">
                    <PostList />
                </div>

                <footer className="footer">
                    <div className="container">
                        <p className="text-muted">Built with <HeartO /></p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react'
import CommentingO from 'react-icons/lib/fa/commenting-o'
import CategoriesBar from './CategoriesBar'

class Header extends Component {
    render(){
        return (
            <header className="App-header">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/"><CommentingO size={30} className='logo' /> readable</a>
                        </div>
                        <CategoriesBar />
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;
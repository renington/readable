import React, { Component } from 'react'

class CategoriesBar extends Component {
    render(){
        return (
            <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">REACT</a></li>
                    <li><a href="#about">REDUX</a></li>
                    <li><a href="#contact">NATIVE</a></li>
                </ul>
            </div>
        )
    }
}

export default CategoriesBar;
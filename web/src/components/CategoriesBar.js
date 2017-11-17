import React, { Component } from 'react'
import { fetchCategories } from '../actions/Categories'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CategoriesBar extends Component {
    componentDidMount () {
        this.props.dispatch(fetchCategories())
    }

    render(){
        const { categories } = this.props;

        return (
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                    {categories && categories.map( (category) => (
                        <li key={category.path} className="">
                            <Link to={`/${category.path}`} className='link'>{category.name}</Link>
                        </li>
                    ))}
                    </ul>
                </div>
        )
    }
}

const mapStateToProps = state => ({ categories: state.categories });

const mapDispatchToProps = (dispatch, fetchPosts) => ({
    dispatch,
    fetchCategories
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesBar);
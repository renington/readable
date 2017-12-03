import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OrderByDate, OrderByVote} from '../actions/Posts'

class SortBar extends Component {
    handleOrderByVote = (e) => {
        console.log('sasa');
        this.props.dispatch(OrderByVote())
    }

    handleOrderByDate = (e) => {
        this.props.dispatch(OrderByDate())
    }

    render() {
        return (
            <div className="container">
                <div>Sort by [ <a onClick={() => { this.handleOrderByVote() }}> VOTE </a> | <a onClick={() => { this.handleOrderByDate() }}> DATE </a> ]</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ });

const mapDispatchToProps = (dispatch, OrderByVote, OrderByDate) => ({
    dispatch,
    OrderByVote,
    OrderByDate
})

export default connect(mapStateToProps, mapDispatchToProps)(SortBar);
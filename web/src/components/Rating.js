import React from 'react'
import ChevUp from 'react-icons/lib/fa/chevron-up'
import ChevDown from 'react-icons/lib/fa/chevron-down'
import { votePost } from '../actions/Posts'
import { voteComment } from '../actions/Comments'
import PropTypes from 'prop-types'

const Rating = ({ item, type, dispatch }) => {
    const handleIncreaseVote = (e) => {
        if(type == 'post'){
            dispatch(votePost(item.id, 'upVote'))
        }else{
            dispatch(voteComment(item.id, 'upVote'))
        }
    }

    const handleDecreaseVote = (e) => {
        if(type == 'post'){
            dispatch(votePost(item.id, 'downVote'))
        }else{
            dispatch(voteComment(item.id, 'downVote'))
        }
    }

    const getItem = (item) => {
        if(item){
            return (
                <div>
                    <div className="rating-up"><ChevUp size={20} onClick={handleIncreaseVote} /></div>
                    <div className="rating-value">{item.voteScore}</div>
                    <div className="rating-down"><ChevDown  size={20} onClick={handleDecreaseVote} /></div>
                </div>
            )
        }
    }

    return (
        <div className="col-sm-1 vote">
            {getItem(item)}
        </div>
    )
}

Rating.PropTypes = {
    item: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
}

export default Rating;
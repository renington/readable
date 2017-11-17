import React, { Component } from 'react'
import ChevUp from 'react-icons/lib/fa/chevron-up'
import ChevDown from 'react-icons/lib/fa/chevron-down'

class Rating extends Component {
    render(){
        return (
            <div className="col-sm-1 vote">
                <div className="rating-up"><ChevUp size={20} /></div>
                <div className="rating-value">10</div>
                <div className="rating-down"><ChevDown  size={20}/></div>
            </div>
        )
    }
}

export default Rating;
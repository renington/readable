import React, { Component } from 'react'
import ChevUp from 'react-icons/lib/fa/chevron-up'
import ChevDown from 'react-icons/lib/fa/chevron-down'
import { votePost } from '../actions/Posts'
import { connect } from 'react-redux'

class Rating extends Component {
    handleIncreaseVote = (e) => {
        this.props.dispatch(votePost(this.props.post.id, 'upVote'))
    }
    
    render(){
        const { post } = this.props;

        return (
            <div className="col-sm-1 vote">
                {this.getPost(post)}
            </div>
        )
    }

    getPost = (post) => {
        if(post){
            return (
                <div>
                    <div className="rating-up"><ChevUp size={20} onClick={this.handleIncreaseVote.bind(this)} /></div>
                    <div className="rating-value">{post.voteScore}</div>
                    <div className="rating-down"><ChevDown  size={20}/></div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, votePost) => ({
    dispatch,
    votePost
})

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
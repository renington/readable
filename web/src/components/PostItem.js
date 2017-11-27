import React, {Component} from 'react';
import Rating from './Rating'
import { deletePost } from '../actions/Posts'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class PostItem extends Component {
    handleDelete = (e) => { 
        this.props.post.deleted = true;
        this.props.dispatch(deletePost(this.props.post))
    }

    render() {
        const { post } = this.props;

        return (
            <div className="row post">
                <Rating rating={post.voteScore} />
                <div className="col-sm-11 publish">
                    <Link to={`/${post.category}/${post.id}`} className='link'>
                        <h2>{post.title}</h2>
                    </Link>
                    <div className="content">{post.body}</div>
                    <div className="action">
                        Post by <a href="">{post.author}</a> ({post.category}) has <strong>{post.commentCount}</strong> comments. | Edit | <a onClick={() => { this.handleDelete(post) }}> delete </a>
                    </div>
                </div>
                
            </div>
        )
    }
}

// PostList.propTypes = {
//     posts: PropTypes.array.isRequired
// };

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, deletePost) => ({
    dispatch,
    deletePost
})

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
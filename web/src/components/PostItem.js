import React, {Component} from 'react';
import Rating from './Rating'
import CommentList from './CommentList'
import { Link } from 'react-router-dom'

class PostItem extends Component {
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
                        Post by <a href="#">{post.author}</a> ({post.category}) has <strong>{post.commentCount}</strong> comments.
                    </div>
                </div>
                <CommentList parentId={post.id} />
            </div>
        )
    }
}

// PostList.propTypes = {
//     posts: PropTypes.array.isRequired
// };

export default PostItem;
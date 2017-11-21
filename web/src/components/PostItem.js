import React, {Component} from 'react';
import Rating from './Rating'
import CommentList from './CommentList'

class PostItem extends Component {
    render() {
        const { post } = this.props;

        return (
            <div className="row post">
                <Rating rating={post.voteScore} />
                <div className="col-sm-11 publish">
                    <h2>{post.title}</h2>
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
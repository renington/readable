import React, {Component} from 'react'
import Rating from './Rating'
import { deletePost } from '../actions/Posts'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import EditPost from './EditPost'
import TimeAgo from 'react-timeago'

class PostItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            editMode: false
        }
    }

    static propTypes = {
        post: PropTypes.object.isRequired
    };

    handleDelete = (e) => { 
        this.props.post.deleted = true;
        this.props.dispatch(deletePost(this.props.post))
    }

    handleEdit = (e) => {
        this.setState({ editMode: true })
    }

    changeHideEditForm = () => {
        this.setState({ editMode: false });
    }

    render() {
        const { post } = this.props;

        if(!this.state.editMode){
            return (
                <div className="row post">
                    <Rating item={post} type={"post"} dispatch={this.props.dispatch} />
                    <div className="col-sm-11 publish">
                        <Link to={`/${post.category}/${post.id}`} className='link'>
                            <h2>{post.title}</h2>
                        </Link>
                        <div className="content">{post.body}</div>
                        <div className="action">
                            Post by <a href="">{post.author}</a> ({post.category}) - {<TimeAgo date={post.timestamp} />} - has <strong>{post.commentCount}</strong> comments. | <a onClick={() => { this.handleEdit(post) }}> edit </a> | <a onClick={() => { this.handleDelete(post) }}> delete </a>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <EditPost post={post} changeHideEditForm={this.changeHideEditForm}  />
            )
        }
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, deletePost) => ({
    dispatch,
    deletePost
})

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
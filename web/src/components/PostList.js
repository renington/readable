import React, {Component} from 'react';
import Rating from './Rating'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions/Posts'

class PostList extends Component {
    componentDidMount () {
        this.props.dispatch(fetchPosts())
    }

    render() {
        const { posts } = this.props;

        return (
            <div className="row post">
                <Rating />
                <div className="col-sm-11 publish">
                    <h2>Testing connected components</h2>
                    <div className="content">
                        Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on the <code>body &gt; .container</code>.
                    </div>
                    <div className="action">
                        Post by <a href="#">renington</a> has <strong>2</strong> comments.
                    </div>
                </div>
            </div>
        );
    }
}

// PostList.propTypes = {
//     posts: PropTypes.array.isRequired
// };

const mapStateToProps = state => ({ posts: state.posts });

const mapDispatchToProps = (dispatch, fetchPosts) => ({
    dispatch,
    fetchPosts
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
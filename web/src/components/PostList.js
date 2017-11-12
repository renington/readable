import React, {Component} from 'react';
import Rating from './Rating'

class PostList extends Component {
    render() {
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

export default PostList;
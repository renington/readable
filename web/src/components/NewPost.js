import React, { Component } from 'react'

class NewPost extends Component {
    render() {
        if(this.props.showForm){
            return (
                <div className="container">
                    <form className="box-form">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Type the title here" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <textarea className="form-control" rows="3" placeholder="Type text here"></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">SAVE</button> 
                        <button type="button" className="btn btn-default pull-right" onClick={this.props.changeShowForm}>CANCEL</button>
                    </form>
                </div>
            )
        }else{
            return ( 
                <div className="container">
                    <div className="new-post-nav">
                        <button className='btn btn-success' onClick={this.props.changeShowForm}>NEW</button>
                    </div>
                </div>
            )
        }
    }
}

export default NewPost;
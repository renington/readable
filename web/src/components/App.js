import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import PostsFiltered from './PostsFiltered'
import PostPage from './PostPage'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:category" component={PostsFiltered} />
                <Route exact path='/:category/:postId' component={PostPage} />
            </Switch>
        );
    }
}

export default App;
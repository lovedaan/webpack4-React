import React from 'react';
import ReactDOM from 'react-dom';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import {
    Provider
} from 'react-redux';
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

//import App from './App';
import 'common/css/base.css';
import {
    counter
} from './redux/redux-movie';

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => {}
));


import Home from 'components/home.jsx';
import Profile from 'components/profile.jsx';
import Search from 'components/search.jsx';
import List from 'components/list.jsx';
import Layout from 'components/Layout.jsx';

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route path="/list/:id" component={List} />
                        <Route path="/" render={props => (
                            <Layout>
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/search" component={Search} />
                                    <Route path="/profile" component={Profile} />
                                </Switch>
                            </Layout>
                        )}></Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    ),
    document.getElementById('app')
);
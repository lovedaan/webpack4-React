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

import App from './App';
import 'common/css/base.css';
import {
    counter
} from './redux.index';

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => {}
));

function Search() {
    return <h2>我是搜索页面！</h2>
}

function Profile() {
    return <h2>我是个人中心页面！</h2>
}

class Test extends React.Component {
    constructor() {
        super();
    }
    render() {
        const {
            match
        } = this.props;
        console.log(this.props)
        return (<div>
            <h2>测试页面,传递的值是：{match.params.id}</h2>
        </div>)
    }
}

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <div>
                    <div className="nav-list">
                        <NavLink exact to="/" activeClassName="active">主页</NavLink>
                        <NavLink to="/search" activeClassName="active">搜索</NavLink>
                        <NavLink to="/test/25" activeClassName="active">测试</NavLink>
                        <NavLink to="/profile" activeClassName="active">个人</NavLink>
                    </div>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route path="/search" component={Search} />
                        <Route path="/test/:id" component={Test} />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    ),
    document.getElementById('app')
);
import React from 'react';
import {NavLink} from 'react-router-dom';

export default class NavView extends React.Component{
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="nav-list">
                <NavLink exact to="/" activeClassName="active">主页</NavLink>
                <NavLink to="/search" activeClassName="active">搜索</NavLink>
                <NavLink to="/profile" activeClassName="active">个人</NavLink>
            </div>
        );
    }
}
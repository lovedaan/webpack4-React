import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Search extends React.Component{
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="search">
                <h1>我是搜索页面</h1>
            </div>
        );
    }
}
import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="profile">
                <h1>我是个人主页</h1>
            </div>
        );
    }
}
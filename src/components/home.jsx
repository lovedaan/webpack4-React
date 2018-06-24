import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="home">
                <h1>我是主页</h1>
                <ul>
                    <li><Link to="/list/1">列表页1</Link></li>
                    <li><Link to="/list/2">列表页2</Link></li>
                    <li><Link to="/list/3">列表页3</Link></li>
                </ul>
            </div>
        );
    }
}
export default Home;
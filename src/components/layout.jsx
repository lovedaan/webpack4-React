import React from 'react';
import NavView from './nav.jsx';
export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <NavView />
                {this.props.children}
            </div>
        );
    }
}
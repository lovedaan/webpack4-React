import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const list = this.props.list;
        return (
            <ul>
                {list && list.map(item => {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        );
    }
}
import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            match
        } = this.props;
        return (
            <div className="profile">
                <h1>列表页数据</h1>
                <h2>测试页面,传递的值是：{match.params.id}</h2>
            </div>
        );
    }
}
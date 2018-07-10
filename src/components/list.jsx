import React from 'react';

import {
    connect
} from 'react-redux';

@connect(
    state => ({
        list: state.movieList
    }), {})

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            match
        } = this.props;
		const mList = this.props.list;
        return (
            <div className="profile">
                <h1>列表页数据</h1>
                <h2>测试页面,传递的值是：{match.params.id}</h2>
				<ul>
					{mList.map(item => {
						return <li key={item.id}>{item.title}</li>
					})}
				</ul>
            </div>
        );
    }
}
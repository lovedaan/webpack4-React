import React from 'react';
import {
    connect
} from 'react-redux';

import {
    addCount,
    removeCount,
    addCountAsync,
    getMovieListAsync
} from './redux.index';

import List from './List';

// App = connect(mapStateToProp, actionsCreators)(App);
@connect(
    state => ({
        num: state.count,
        list: state.list
    }), {
        addCount,
        removeCount,
        addCountAsync,
        getMovieListAsync
    })
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const addCount = this.props.addCount;
        const removeCount = this.props.removeCount;
        const addCountAsync = this.props.addCountAsync;
        const getMovieListAsync = this.props.getMovieListAsync;
        const num = this.props.num;
        const list = this.props.list;
        return (
            <div>
                <h1>hello React, 现在的数字是：{num}</h1>
                <button onClick={addCount}>增加数字</button>

                <button style={{'marginLeft':'20px'}} onClick={removeCount}>减少数字</button>

                <button style={{'marginLeft':'20px'}} onClick={addCountAsync}>拖两秒增加</button>
                <br />
                <button onClick={getMovieListAsync}>点击获取电影数据</button>
                <List list={list} />
            </div>
        );
    }
}

export default App;
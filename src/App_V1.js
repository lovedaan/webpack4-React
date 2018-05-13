import React from 'react';

class App extends React.Component {
    render() {
        const store = this.props.store;
        const addCount = this.props.addCount;
        const removeCount = this.props.removeCount;
        const addCountAsync = this.props.addCountAsync;
        const num = store.getState();
        return (
            <div>
                <h1>hello React, 现在的数字是：{num}</h1>
                <button onClick={() => {
                    store.dispatch(addCount());
                }}>增加数字</button>

                <button style={{'marginLeft':'20px'}} onClick={() => {
                    store.dispatch(removeCount());
                }}>减少数字</button>

                <button style={{'marginLeft':'20px'}} onClick={() => {
                    store.dispatch(addCountAsync());
                }}>拖两秒增加</button>
            </div>
        );
    }
}

export default App;
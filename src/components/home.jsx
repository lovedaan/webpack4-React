import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(123)
    }
    show(e) {
        console.log(e)
    }
    render () {
        return (
            <div>
                <button onClick={this.show.bind(this)}>我是按钮</button>
                <img src={require('../common/images/1.jpg')} alt="" />
            </div>
        );
    }
}
export default Home;
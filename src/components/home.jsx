import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {
    connect
} from 'react-redux';

import {
    getMovieListAsync
} from '../redux/redux-movie';

@connect(
    state => ({
        list: state.movieList
    }), {
        getMovieListAsync
    })

class Home extends React.Component {
    constructor(props) {
        super(props);
		this.getMovieListAsync = props.getMovieListAsync;
    }
	componentWillMount() {
		/*axios.get('/api/top250',{
			params: {
				start: 0,
				count: 20
			}
		}).then( res => {
			console.log(res.data.subjects);
			this.setState({
				list: res.data.subjects
			})
		})*/
		this.getMovieListAsync('top250');
	}
    render () {
		
		const list = this.props.list;
        return (
            <div className="home">
                <h1>我是主页</h1>
                <ul>
					{list.map(item => {
						return <li key={item.id}><Link to={'/list/' + item.id}>{item.title}</Link></li>;
					})}
                </ul>
            </div>
        );
    }
}
export default Home;
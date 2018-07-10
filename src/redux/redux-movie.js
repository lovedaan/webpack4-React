import axios from 'axios';

const INTHEATERSMOVIE = 'in_theaters';
const COMINGSOONMOVIE = 'coming_soon';
const TOP250MOVIE = 'top250';
const FETCH_START = '开始';

const initialState = {
    movieList: []
};

export function counter(state = initialState, action) {
	switch (action.type) {
        case INTHEATERSMOVIE:
            return {
                movieList: action.list
            };
        case COMINGSOONMOVIE:
            return {
                movieList: action.list
            };
        case TOP250MOVIE:
            return {
                movieList: action.list
            };
		case FETCH_START:
            return state;
        default:
            return state;
    }
}

export function refreshStart() {
    return {
        type: FETCH_START
    }
}

export function getMovieListAsync(type) {
    return dispatch => {
        dispatch(refreshStart());
        return axios.get('/api/' + type).then(res => {
            dispatch({
                type: INTHEATERSMOVIE,
                list: res.data.subjects
            });
        }).catch(err => {
            console.log(err);
            dispatch({
                type: INTHEATERSMOVIE,
                list: []
            });
        });
    }
}
import axios from 'axios';
const ADD_COU = '加';
const REMOVE_COU = '减';
const MOVIE = '电影';
const FETCH_START = '开始';

const initialState = {
    count: 10,
    list: []
};

export function counter(state = initialState, action) {
    switch (action.type) {
        case ADD_COU:
            return {...state,
                count: state.count + 1
            };
        case REMOVE_COU:
            return {...state,
                count: state.count - 1
            };
        case MOVIE:
            return {...state,
                list: action.list
            };
        case FETCH_START:
            return state;
        default:
            return state;
    }
}

export function addCount() {
    return {
        type: ADD_COU
    }
}

export function removeCount() {
    return {
        type: REMOVE_COU
    }
}

export function addCountAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addCount());
        }, 2000);
    }
}
export function refreshStart() {
    return {
        type: FETCH_START
    }
}

export function getMovieListAsync() {
    return dispatch => {
        dispatch(refreshStart());
        return axios.get('/api/in_theaters').then(res => {
            dispatch({
                type: MOVIE,
                list: res.data.subjects
            });
        }).catch(err => {
            console.log(err);
            dispatch({
                type: MOVIE,
                list: []
            });
        });
    }
}
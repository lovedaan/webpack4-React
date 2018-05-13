import {
    createStore
} from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
        case '加':
            return state + 1;
        case '减':
            return state - 1;
        default:
            return 10;
    }
}

const store = createStore(counter);

const init = store.getState();

console.log(init);

function listener() {
    const cur = store.getState();
    console.log(`现在的数字是：${cur}`);
}

store.subscribe(listener);
store.dispatch({
    type: '加'
});
console.log(store.getState());

store.dispatch({
    type: '加'
});
console.log(store.getState());

store.dispatch({
    type: '减'
});
console.log(store.getState());
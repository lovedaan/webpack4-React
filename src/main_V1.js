import React from 'react';
import ReactDOM from 'react-dom';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import {
    counter,
    addCount,
    removeCount,
    addCountAsync
} from './redux.index';

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => {}
));


function render() {
    ReactDOM.render(
        <App
            store={store}
            addCount={addCount}
            removeCount={removeCount}
            addCountAsync={addCountAsync}
        />,
        document.getElementById('app')
    );
}
render();
store.subscribe(render);
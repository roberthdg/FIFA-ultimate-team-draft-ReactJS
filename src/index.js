import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';


// STORE
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


//ACTION


//REDUCER


//DISPATCH


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

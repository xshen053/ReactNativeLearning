import {createStore, applyMiddleware} from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;

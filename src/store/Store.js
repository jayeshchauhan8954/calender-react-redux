import { createStore } from 'redux';
import { reducers } from '../reducer/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(reducers, composeWithDevTools());
// const store = createStore(reducers, window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__);

export default store;

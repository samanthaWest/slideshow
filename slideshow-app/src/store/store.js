import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import photosReducer from './reducers/photosReducer';
export const store = createStore(photosReducer, applyMiddleware(thunk));
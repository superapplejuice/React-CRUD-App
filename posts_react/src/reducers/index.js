import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './postReducer';

export default combineReducers({ form: formReducer, posts: postsReducer });

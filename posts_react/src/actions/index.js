import {
	FETCH_POSTS,
	FETCH_POST,
	CREATE_POST,
	EDIT_POST,
	DELETE_POST
} from './types';
import posts from '../api/posts';
import history from '../components/history';

export const fetchPostsAction = () => async dispatch => {
	const res = await posts.get('/posts');

	dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const fetchPostAction = id => async dispatch => {
	const res = await posts.get(`/posts/${id}`);

	dispatch({ type: FETCH_POST, payload: res.data });
};

export const createPostAction = formValues => async dispatch => {
	const res = await posts.post('/posts', { ...formValues });

	dispatch({ type: CREATE_POST, payload: res.data });

	history.push('/');
};

export const editPostAction = (id, formValues) => async dispatch => {
	const res = await posts.put(`/posts/${id}`, formValues);

	dispatch({ type: EDIT_POST, payload: res.data });

	history.push('/');
};

export const deletePostAction = id => async dispatch => {
	await posts.delete(`/posts/${id}`);

	dispatch({ type: DELETE_POST, payload: id });

	history.push('/');
};

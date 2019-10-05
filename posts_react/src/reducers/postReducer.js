import mapKeys from 'lodash/mapKeys';
import omit from 'lodash/omit';

import {
	FETCH_POSTS,
	FETCH_POST,
	CREATE_POST,
	EDIT_POST,
	DELETE_POST
} from '../actions/types';

export default (state = {}, { type, payload }) => {
	switch (type) {
		case FETCH_POSTS:
			return { ...state, ...mapKeys(payload, 'id') };

		case FETCH_POST:
			return { ...state, [payload.id]: payload };

		case CREATE_POST:
			return { ...state, [payload.id]: payload };

		case EDIT_POST:
			return { ...state, [payload.id]: payload };

		case DELETE_POST:
			return omit(state, payload);

		default:
			return state;
	}
};

import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PostForm from '../form/PostForm';
import { createPostAction } from '../../actions';

const PostCreate = props => {
	const { createPostAction } = props;

	const onSubmit = formValues => {
		createPostAction(formValues);
	};

	return (
		<Fragment>
			<h3>Create a post</h3>
			<PostForm onSubmit={onSubmit} />
		</Fragment>
	);
};

export default connect(
	null,
	{ createPostAction }
)(PostCreate);

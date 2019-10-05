import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import pick from 'lodash/pick';

import PostForm from '../form/PostForm';
import { fetchPostAction, editPostAction } from '../../actions';

const PostEdit = props => {
	const { match, post, fetchPostAction, editPostAction } = props;

	useEffect(() => {
		fetchPostAction(match.params.id);
		// eslint-disable-next-line
	}, []);

	const onSubmit = formValues => {
		editPostAction(match.params.id, formValues);
	};

	const renderHelper = () => {
		if (!post) {
			return <h3>Loading your post...</h3>;
		}

		return (
			<Fragment>
				<h3>Edit your post</h3>
				<PostForm
					onSubmit={onSubmit}
					initialValues={pick(post, 'title', 'description')}
				/>
			</Fragment>
		);
	};

	return <Fragment>{renderHelper()}</Fragment>;
};

const mapStateToProps = (state, ownProps) => {
	const { id } = ownProps.match.params;
	return {
		post: state.posts[id]
	};
};

export default connect(
	mapStateToProps,
	{ fetchPostAction, editPostAction }
)(PostEdit);

import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchPostAction, deletePostAction } from '../../actions';
import Modal from '../modal/Modal';
import history from '../history';

const PostDelete = props => {
	const { match, post, fetchPostAction, deletePostAction } = props;

	useEffect(() => {
		fetchPostAction(match.params.id);
		// eslint-disable-next-line
	}, []);

	const modalContent = () => {
		if (!post) {
			return (
				<div className="ui placeholder">
					<div className="full line"></div>
					<div className="long line"></div>
					<div className="long line"></div>
					<div className="long line"></div>
					<div className="long line"></div>
					<div className="long line"></div>
				</div>
			);
		}
		const { title, description } = post;
		return (
			<Fragment>
				<h3>{title}</h3>
				<p>{description}</p>
			</Fragment>
		);
	};

	const modalActions = () => {
		return (
			<Fragment>
				<button
					className="ui button red"
					onClick={() => deletePostAction(match.params.id)}
				>
					Delete
				</button>
				<button className="ui button" onClick={() => history.push('/')}>
					Cancel
				</button>
			</Fragment>
		);
	};

	return (
		<Modal
			header="Delete this post?"
			content={modalContent()}
			actions={modalActions()}
		/>
	);
};

const mapStateToProps = (state, ownProps) => {
	const { id } = ownProps.match.params;
	return {
		post: state.posts[id]
	};
};

export default connect(
	mapStateToProps,
	{ fetchPostAction, deletePostAction }
)(PostDelete);

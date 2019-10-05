import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPostsAction } from '../../actions';

const PostList = props => {
	const { posts, fetchPostsAction } = props;

	useEffect(() => {
		fetchPostsAction();
		// eslint-disable-next-line
	}, []);

	const renderActionButtons = id => {
		return (
			<Fragment>
				<Link className="ui primary button" to={`/posts/edit/${id}`}>
					Edit
				</Link>
				<Link className="ui button red" to={`/posts/delete/${id}`}>
					Delete
				</Link>
			</Fragment>
		);
	};

	const renderList = () => {
		if (posts.length === 0) {
			return <h3>Go and create a post!</h3>;
		}

		return posts.map(post => {
			const { id, title, description } = post;
			return (
				<div className="ui pilled segment" key={id}>
					<h3>{title}</h3>
					<p>{description}</p>
					{renderActionButtons(id)}
				</div>
			);
		});
	};

	const renderHelper = () => {
		return (
			<Fragment>
				{renderList()}
				<Link className="ui button primary" to="/posts/new">
					Create a post
				</Link>
			</Fragment>
		);
	};

	return <Fragment>{renderHelper()}</Fragment>;
};

const mapStateToProps = state => {
	return {
		posts: Object.values(state.posts)
	};
};

export default connect(
	mapStateToProps,
	{ fetchPostsAction }
)(PostList);

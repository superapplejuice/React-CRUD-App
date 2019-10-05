import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../components/history';
import Header from './Header';

import PostList from './posts/PostList';
import PostCreate from './posts/PostCreate';
import PostEdit from './posts/PostEdit';
import PostDelete from './posts/PostDelete';

import '../styles/App.css';

const App = () => {
	const renderPostComponents = () => {
		return (
			<div className="main-container ui container">
				<Route path="/" exact component={PostList} />
				<Route path="/posts/new" exact component={PostCreate} />
				<Route path="/posts/edit/:id" exact component={PostEdit} />
				<Route path="/posts/delete/:id" exact component={PostDelete} />
			</div>
		);
	};

	const renderHelper = () => {
		return (
			<Router history={history}>
				<Header />
				{renderPostComponents()}
			</Router>
		);
	};

	return <div>{renderHelper()}</div>;
};

export default App;

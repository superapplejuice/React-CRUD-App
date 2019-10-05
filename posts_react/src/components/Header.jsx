import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="ui top fixed header menu">
			<Link className="item" to="/">
				Home
			</Link>
		</div>
	);
};

export default Header;

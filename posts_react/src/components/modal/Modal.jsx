import React from 'react';
import ReactDOM from 'react-dom';

import history from '../history';

const Modal = props => {
	const ModalElement = document.querySelector('#modal');
	const { header, content, actions } = props;

	const modalElements = () => {
		return (
			<div
				className="ui dimmer modals visible active"
				onClick={() => history.push('/')}
			>
				<div
					className="ui standard modal visible active"
					onClick={event => event.stopPropagation()}
				>
					<div className="header">{header}</div>
					<div className="content">{content}</div>
					<div className="actions">{actions}</div>
				</div>
			</div>
		);
	};

	return ReactDOM.createPortal(modalElements(), ModalElement);
};

export default Modal;

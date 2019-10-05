import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';

// this is the only class component in the whole project
// had to use class methods to prevent re-renders on every input
class PostForm extends Component {
	renderInput({ input, meta, label }) {
		return (
			<div className="field">
				<label>{label}</label>
				<textarea
					{...input}
					autoComplete="off"
					rows={label === 'Title' ? '1' : '4'}
				></textarea>
				{meta.touched && <div>{meta.error}</div>}
			</div>
		);
	}

	formSubmit = formValues => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<Fragment>
				<form
					className="ui form"
					onSubmit={this.props.handleSubmit(this.formSubmit)}
				>
					<Field
						name="title"
						label="Title"
						component={this.renderInput}
					/>
					<Field
						name="description"
						label="Description"
						component={this.renderInput}
					/>
					<button className="ui button primary">Submit</button>
				</form>
			</Fragment>
		);
	}
}

const formValidate = formValues => {
	const errors = {};

	if (!formValues.title) {
		errors.title = 'Please enter a Title!';
	}

	if (!formValues.description) {
		errors.description = 'Please enter some text!';
	}

	return errors;
};

export default reduxForm({
	form: 'PostForm',
	validate: formValidate
})(PostForm);

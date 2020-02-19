import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
import PropTypes from "prop-types";

class NewTicketControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false
		};
		this.handleDisplayForm = this.handleDisplayForm.bind(this);
	}

	handleDisplayForm() {
		this.setState({ formVisibleOnPage: true });
	}

	render() {
		let currentlyVisibleContent = null;
		if (this.state.formVisibleOnPage) {

			// onSubmitNewTicketForm is passed in from App to NewTicketControl to NewTicketForm .It is passing the callback 
			// function "handleAddingNewTicketToList" down through the tree into the function handleNewTicketFormSubmission
			// where it then called while passing all the ref values from the form fields. 
			currentlyVisibleContent = <NewTicketForm
				onSubmitNewTicketForm={this.props.onSubmitNewTicketForm} />;
		} else {
			currentlyVisibleContent = <ConfirmationQuestions
				onSubmitQuestionsAnswered={this.handleDisplayForm} />;
		}
		return (
			<div>
				{currentlyVisibleContent}
			</div>
		);
	}
}

NewTicketControl.propTypes = {
	onSubmitNewTicketForm: PropTypes.func
};

export default NewTicketControl;
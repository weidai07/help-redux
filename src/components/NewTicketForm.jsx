import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment'; // Library to work with time and dates
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewTicketForm(props) {
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_TICKET',
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  return (
    <div>
      <div style={formContainer}>
        <form onSubmit={handleNewTicketFormSubmission}>
          <input style={pairNames}
            type='text'
            id='names'
            placeholder='Pair Names'
            ref={(input) => { _names = input; }} />
          <input
            type='text' style={locationInput}
            id='location'
            placeholder='Location'
            ref={(input) => { _location = input; }} />
          <textarea style={issueInput}
            id='issue'
            placeholder='Describe your issue.'
            ref={(textarea) => { _issue = textarea; }} />
          <button type='submit' style={submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
}


NewTicketForm.propTypes = {
  dispatch: PropTypes.func
};


NewTicketForm = connect()(NewTicketForm);

export default NewTicketForm;




// ------------------- All styling below -------------------

var formContainer = {
  backgroundColor: 'white',
  width: '400px',
  margin: '100px auto',
  height: '500px',
  borderRadius: '3px',
  border: '50px solid #ffc55b'
};

var pairNames = {
  border: '2px solid gray',
  width: '350px',
  height: '30px',
  margin: '20px',
  borderRadius: '3px'
};

var locationInput = {
  border: '2px solid gray',
  width: '350px',
  height: '30px',
  margin: '20px',
  borderRadius: '3px'
};

var issueInput = {
  border: '2px solid gray',
  width: '350px',
  height: '200px',
  margin: '20px'
};

var submitButton = {
  margin: '30px 0 50px 40%',
  fontSize: '25px',
  backgroundColor: 'lightgray',
  borderRadius: '5px',
  padding: '2px 10px'
};
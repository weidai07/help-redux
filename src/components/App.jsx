import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Header from './Header';
import Navbar from './Navbar';
import blueBg from '../assets/images/blue.jpg';
import Admin from './Admin';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'moment';

class App extends React.Component {


  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterTicketList).map(ticketId => {
      const ticket = this.props.masterTicketList[ticketId];
      const newFormattedWaitTime = Moment(ticket.timeOpen).fromNow(true);
      const action = {
        type: 'UPDATE_TIME',
        id: ticketId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
  }

  render() {
    console.log("this.state.masterTicketList");
    return (
      <div>

        <Navbar />
        <Header />

        <Switch>
          <Route exact path='/' render={() => <TicketList
            ticketList={this.props.masterTicketList} />} />

          <Route path='/newticket' render={() => <NewTicketControl />} />

          <Route path='/admin' render={(props) => <Admin
            currentRouterPath={props.location.pathname}
          />} />

          <Route component={Error404} />
        </Switch>

        <style global jsx>{`
          body {
            font-family:  Arial, Helvetica, sans-serif;
            font-size: 18px;
            background: url('${blueBg}');
          }
        `}</style>

      </div>
    );
  }
}


App.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};


export default withRouter(connect(mapStateToProps)(App));









// App.jsx



//   < Route path = '/newticket' render = {() => <NewTicketControl
//     onSubmitNewTicketForm={this.handleAddingNewTicketToList} />} />



// NewTicketControl



// if (this.state.formVisibleOnPage) {
//   currentlyVisibleContent = <NewTicketForm
//     onSubmitNewTicketForm={this.props.onSubmitNewTicketForm} />;



// NewTicketForm


//   function handleNewTicketFormSubmission(event) {
//     event.preventDefault();
//     props.onSubmitNewTicketForm({ names: _names.value, location: _location.value, issue: _issue.value });
//     _names.value = '';
//     _location.value = '';
//     _issue.value = '';
//   }

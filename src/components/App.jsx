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

class App extends React.Component {


  constructor(props) {
    super(props);
    console.log("I am the props" + props);
    this.state = {
      selectedTicket: null
    };
    // this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    // this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }


  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }


  updateTicketElapsedWaitTime() {
    // var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    // Object.keys(newMasterTicketList).forEach(ticketId => {
    //   newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    // });
    // this.setState({ masterTicketList: newMasterTicketList });
  }

  // This is passed down through props to the NewTicketForm, and then called when a user
  // clicks on the form submit button

  // handleAddingNewTicketToList(newTicket){
  //   var newTicketId = v4();
  //   var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
  //     [newTicketId]: newTicket
  //   });
  //   newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
  //   this.setState({masterTicketList: newMasterTicketList});
  // }

  // This method is passed down through props to TicketDetailPage, and is called when an
  // admin clicks on any given ticket. 

  handleChangingSelectedTicket(ticketId) {
    this.setState({ selectedTicket: ticketId });
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

          <Route path='/newticket' render={() => <NewTicketControl
          // onSubmitNewTicketForm={this.handleAddingNewTicketToList} 
          />} />
          <Route path='/admin' render={(props) => <Admin
            ticketList={this.props.masterTicketList}
            currentRouterPath={props.location.pathname}
            onTicketSelection={this.handleChangingSelectedTicket}
            selectedTicket={this.state.selectedTicket}
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
    masterTicketList: state
  }
}


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

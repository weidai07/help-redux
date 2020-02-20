import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Header from './Header';
import Navbar from './Navbar';
import blueBg from '../assets/images/blue.jpg';
import Admin from './Admin';


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
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

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps');
  // }

  // shouldComponentUpdate() {

  //   //View this is the console to watch it at work. Try changing value to false
  //   console.log('shouldComponentUpdate');
  //   return true;
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }


  updateTicketElapsedWaitTime() {
    console.log("check");
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({ masterTicketList: newMasterTicketList })
  }

  // This is passed down through props to the NewTicketForm, and then called when a user
  // clicks on the form submit button

  handleAddingNewTicketToList(newTicket) {
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true)
    this.setState({
      masterTicketList: [...this.state.masterTicketList, newTicket]
    });
  }

  // This method is passed down through props to TicketDetailPage, and is called when an
  // admin clicks on any given ticket

  handleChangingSelectedTicket(ticket){
    console.log("I am inside the handleChangingSelectedTicket");
    this.setState({selectedTicket: ticket});
  }


  render() {
    return (
      <div>

        <Navbar />
        <Header />

        <Switch>
          <Route exact path='/' render={() => <TicketList
            ticketList={this.state.masterTicketList} />} />

          <Route path='/newticket' render={() => <NewTicketControl
            onSubmitNewTicketForm={this.handleAddingNewTicketToList} />} />

          <Route path='/admin' render={(props) => <Admin 
            ticketList={this.state.masterTicketList} 
            currentRouterPath={props.location.pathname} 
            onTicketSelection={this.handleChangingSelectedTicket}
            selectedTicket={this.state.selectedTicket} />} />

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

export default App;









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

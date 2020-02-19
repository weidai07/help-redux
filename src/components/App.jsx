import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Header from './Header';
import Navbar from './Navbar';



class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({ masterTicketList: newMasterTicketList });
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

          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;









// App.jsx



//   <Route path='/newticket' render={() => <NewTicketControl 
//     onSubmitNewTicketForm={this.handleAddingNewTicketToList} />} />



// NewTicketControl



// if (this.state.formVisibleOnPage) {
//   currentlyVisibleContent = <NewTicketForm
//     onSubmitNewTicketForm={this.props.onSubmitNewTicketForm} />;



// NewTicketForm


//  function handleNewTicketFormSubmission(event) {
//     event.preventDefault();
//     props.onSubmitNewTicketForm({ names: _names.value, location: _location.value, issue: _issue.value });
//     _names.value = '';
//     _location.value = '';
//     _issue.value = '';
//   }

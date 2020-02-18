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
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={() => <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />>
        </Switch>
      </div>
    );
  }

}

export default App;






// This is how to use CSS modules for global scope.

// function App() {
//   return (
//    <div>
//       <style jsx global>{`
//         body {
//           font-family: Helvetica;
//         }
//         .box {
//           border: none;
//           display: block;
//           border-bottom: 2px solid #fff;
//           margin-bottom: 10px;
//         }
//         .box:hover {
//           border-bottom: 2px solid #ccc;
//           outline: 0;
//         }
//         a {
//           color: #888;
//           text-decoration: none;
//         }
//       `}</style>
//       <div style={{margin: '19px auto 0', width: 142}}>
//         <a href="https://medium.com/" target="_blank">
//           <div className="box">
//              <h1>this content will change on hover because we're using styled-jsx! It would even change if our div with className 'box' was in a nested component! So cool!</h1>
//           </div>
//         </a>
//       </div>
//   </div>
//   );
// }


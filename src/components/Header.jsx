import React from 'react';
import { Link } from 'react-router-dom';


function Header() {

  var headerStyles = {
    backgroundColor: 'cornflowerblue',
    margin: '100px auto 100px auto',
    // textAlign: 'center',
    fontSize: '40px',
    // display: 'inline-block',
    padding: '10px'
  };

  return (
    <div>
      <h1 style={headerStyles} >Help Queue</h1>
      {/* <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link> */}
    </div>
  );
}

export default Header;  
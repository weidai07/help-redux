import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  var headerStyles = {
    backgroundColor: 'cornflowerblue',
    marginTop: '50px'
  };

  return (
    <div>
      <h1 style={headerStyles} >Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link> | <Link to="/test">Test</Link>
    </div>
  );
}

export default Header;  
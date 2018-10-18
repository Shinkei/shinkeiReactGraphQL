import React from 'react';
import Nav from './Nav';

class Header extends React.Component{
  render(){
    return (
      <>
        <div className="bar">
          <a href="">Sell Things</a>
          <Nav />
        </div>
        <div className="sub-bar">
          <p>Search</p>
        </div>
        <div>Cart</div>
      </>
    );
  }
}

export default Header;
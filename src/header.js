import React, { Component } from 'react';

class Header extends Component{
  constructor(props){
    super();
  }
  render () {
    return (
      <header>
        Esto es la cabecera con el color {this.props.color}
      </header>
    );
  }
}

export default Header;

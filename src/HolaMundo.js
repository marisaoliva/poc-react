import React, { Component } from 'react';
import Header from './header'
import Contador from './contador'

class HolaMundo extends Component {
  render () {
    return(
      <div>
        <Header color="red"/>
        <Contador/>
      </div>
    );
  }
}

export default HolaMundo;

import React, { Component } from 'react';

class Contador extends Component {
  constructor(props){
    super (props);
    this.state={
      click:0
    }
    this.contador = this.contador.bind(this);
  }
  contador(){
    this.setState({
      click:this.state.click + 1
    });
  }
  render () {
    return (
      <button onClick={this.contador}>Valor: {this.state.click}</button>
    );
  }

}

export default Contador;

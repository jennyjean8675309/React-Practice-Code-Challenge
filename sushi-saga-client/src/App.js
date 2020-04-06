import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allSushis: [],
      firstIndex: 0
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushiData => this.setState({
      allSushis: sushiData
    }))
  }

  getMoreSushi = () => {
    this.setState({
      firstIndex: this.state.firstIndex + 4
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer currentSushi={this.state.allSushis.slice(this.state.firstIndex, this.state.firstIndex + 4)} getMore={this.getMoreSushi} />
        <Table />
      </div>
    );
  }
}

export default App;
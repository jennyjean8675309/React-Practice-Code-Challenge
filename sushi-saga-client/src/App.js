import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  // I want to store state for my sushi here, in App, because I am going to use this sushi information in both my SushiContainer component and Table component - App is their least common parent, so it makes sense to store my sushi info here
  constructor() {
    super()
    this.state = {
      allSushis: [],
      firstSushiIndex: 0,
      eatenSushi: [],
      wallet: 100
    }
  }
  // I want to render my sushi as soon as the page loads (or as soon as this component gets mounted to the DOM, so I am using the componentDidMount() lifecycle method to fetch my sushi as soon as the page renders)
  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushiData => {
      this.setState({
        allSushis: sushiData
      })
    })
  }

  getMoreSushi = () => {
    if (this.state.firstSushiIndex + 4 >= this.state.allSushis.length) {
      this.setState({
        firstSushiIndex: 0
      })
    } else {
      this.setState({
        firstSushiIndex: this.state.firstSushiIndex + 4
      })
    }
  }

  eatSushi = (sushi) => {
    if (this.state.wallet >= sushi.price) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushi],
        wallet: this.state.wallet - sushi.price
      })
      // Here, I'm using the spread operator to grab what's already in state, and add the newly eaten sushi to it
    } else {
      alert("Sorry, you cannot afford this sushi! Please add more money to your wallet or move on...")
    }
  }

  addMoney = (event) => {
    event.preventDefault()

    let newAmount = parseInt(event.target.amount.value) + this.state.wallet

    this.setState({
      wallet: newAmount
    })

    event.target.reset()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer currentSushi={this.state.allSushis.slice(this.state.firstSushiIndex, this.state.firstSushiIndex + 4)} getMoreSushi={this.getMoreSushi} eatSushi={this.eatSushi} eatenSushi={this.state.eatenSushi} />
        <Table eatenSushi={this.state.eatenSushi} wallet={this.state.wallet} addMoney={this.addMoney} />
      </div>
    );
  }
}

export default App;
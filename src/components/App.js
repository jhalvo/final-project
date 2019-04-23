import React, { Component } from 'react';
import '../stylesheets/App.scss';
import {Loading} from './Loading';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      pokemonData: [],
      dummyButtonClickCount: 0
    }
  }

  componentDidMount() {
    // setTimeout(callback, milliseconds) - just so you can see the loading animation ;)
    setTimeout(() => {this.getData('https://pokeapi.co/api/v2/pokemon')}, 4000);
  }

  getData(url) {
    fetch(url) 
    .then(response => response.json())
    .then(data => {
      this.setState({
        pokemonData: data.results,
        loading: false
      })
    })
  }

  handleDummyButtonClick = () => {
    this.setState({
      dummyButtonClickCount: this.state.dummyButtonClickCount + 1
    })
  }

  render() {

    let pokemonComponentList = this.state.pokemonData.sort(
      (a,b) => (a.name > b.name) ? 1 : -1
    ).map(
      (pokemon, index) => <div key={index}>{pokemon.name}</div>
    )

    return (
      <div className="app">
        <button onClick={this.handleDummyButtonClick}>
          Dummy Button {this.state.dummyButtonClickCount}
        </button>
        <Loading visible={this.state.loading} />
        {pokemonComponentList}
      </div>
    )
  }
}

export default App;

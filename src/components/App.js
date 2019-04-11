import React, { Component } from 'react';
import '../stylesheets/App.scss';
import {Loading} from './Loading';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      pokemonData: []
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon') // returns a response which contains json
      .then(
        response => response.json() // returns javascript objects (from json in response body)
      ).then(
        data => {
          this.setState(
            {
              pokemonData: data.results,
              loading: false
            }
          )
        }
      )
  }

  render() {

    let pokemonComponentList = this.state.pokemonData.sort(
      (a,b) => (a.name > b.name) ? 1 : -1
    ).map(
      // react wants a list of identical components
      // to have a unique key property to differentiate them
      (pokemon, index) => <div key={index}>{pokemon.name}</div>
    )

    return (
      <div className="app">
        <Loading visible={this.state.loading} />
        {pokemonComponentList}
      </div>
    )
  }
}

export default App;

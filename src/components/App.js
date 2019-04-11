import React, { Component } from 'react';
import '../stylesheets/App.scss';
import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';

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
        response => response.json() // returns javascript objects (from json)
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

    let pokemonComponentList = this.state.pokemonData.map(
      pokemon => <div>{pokemon.name}</div>
    )

    return (
      <div className="app">
        {this.state.loading && //short circuit
          <div className="loader">
            <PacmanLoader
              sizeUnit={"px"}
              size={50}
              color={'#123abc'}
              loading={this.state.loading}
            />
          </div>
        }
        {pokemonComponentList}
      </div>
    )
  }
}

export default App;

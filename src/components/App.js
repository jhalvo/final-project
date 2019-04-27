import React, { Component } from 'react';
import '../stylesheets/App.scss';
import {Loading} from './Loading';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      pokemonData: [],
      nextUrl: null,
      previousUrl: null,
      selectedPokemon: {},
      dummyButtonClickCount: 0
    }
  }

  componentDidMount() {
    // setTimeout(callback, milliseconds) - just so you can see the loading animation ;)
    setTimeout(() => {this.getData('https://pokeapi.co/api/v2/pokemon')}, 3000);
  }

  getData(url) {
    fetch(url) 
    .then(response => response.json())
    .then(data => {
      this.setState({
        pokemonData: data.results,
        loading: false,
        nextUrl: data.next,
        previousUrl: data.previous
      })
    })
  }

  getPokemonDetails(url) {
    // implement a fetch call
    // call setState() to update the selectedPokemon in state
    
  }

  handleNextClick = () => {
    this.getData(this.state.nextUrl);
  }

  handlePreviousClick = () => {
    alert("make me work");
    // pretty much the same as handleNextClick()
  }

  handlePokemonClick = (url) => {
    alert("go get data from " + url);
    // then update the slectedPokemon in state
    // then use that data in render()
  }

  render() {

    // Loop over the list of pokemon 
    // to create an array of components.
    // Below in return(), we render the list by inserting {pokemonComponentList}
    let pokemonComponentList = this.state.pokemonData.map(
      (pokemon, index) => { 
        return(
          <div
            key={index}
            onClick={() => this.handlePokemonClick(pokemon.url) }
            // we're using an anonymous function to pass a parameter to a callback function
          >
            {pokemon.name}
          </div>
        )
      }
    )

    return (
      <div className="app">
        <button onClick={this.handlePreviousClick}>Previous</button>
        <button onClick={this.handleNextClick}>Next</button>
        <Loading visible={this.state.loading} />

        <div className="pokemon-list">
          {pokemonComponentList}
        </div>

        {/* this would be a good chunk to turn into a component */}
        <div className="selected-pokemon">
          <div className="name">{this.state.selectedPokemon.name}</div>
          {/* add some details */}
        </div>
      </div>
    )
  }
}

export default App;
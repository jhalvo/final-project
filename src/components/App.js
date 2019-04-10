import React, { Component } from 'react';
import '../stylesheets/App.scss';
import { css } from '@emotion/core';
import { CircleLoader } from 'react-spinners';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }


  render() {
    return (
      <div className="loader">
        <CircleLoader
            sizeUnit={"px"}
            size={50}
            color={'#123abc'}
            loading={this.state.loading}
          />
      </div>
    );
  }
}

export default App;

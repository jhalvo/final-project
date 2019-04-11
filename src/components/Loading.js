import React from 'react';
import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';

// stateless function component
// requires React to be imported
// this component can be imported using: import {Loading} from './Loading.js'
export const Loading = (props) => {
  if (props.visible) {
    return(
      <div className="loader">
        <p>Loading</p>
        <PacmanLoader
          sizeUnit={"px"}
          size={50}
          color={'#123abc'}
          loading={props.visible}
        />
      </div>
    )
  } else {
    return null;
  }
}
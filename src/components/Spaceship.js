// Code The Spaceship Component Here

import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name} </h2>
        <p> Speed: {this.props.speed} </p>
        <p> Has Rockets? {this.props.hasRockets? 'Yes' : 'No'} </p>
        <p> Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
};

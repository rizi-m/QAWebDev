import React, { Component } from 'react';

class RoyaltyShower extends Component {
    constructor(props) {
        super(props);
    }

      render() {
          return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.country}</h2>
                <h2>{this.props.house}</h2>
                <h2>{this.props.years}</h2>
            </div>
          );
      }
}

export default RoyaltyShower;
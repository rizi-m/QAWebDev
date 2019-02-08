import React, { Component } from 'react';

class RoyaltySearchInput extends Component {
    constructor(props) {
        super(props);
    }

      render() {
          return (
            <input placeholder="Search royalty" id="input" type="text" onChange={e => this.props.onChange(e)}/>
          );
      }
}

export default RoyaltySearchInput;
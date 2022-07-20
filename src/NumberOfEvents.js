import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 10
  };

  handleInputChanged = (event) => {
    const { value } = event.target;
    this.setState({ numberOfEvents: value });
  };

  render() {
    return (
      <div className="numberOfEvents">
        <input
          id="events-number"
          type="text"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div >
    )
  }




}

export default NumberOfEvents;
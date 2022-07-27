import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  };

  render() {
    return (
      <div className="number-of-events">
        <label>
          Number of events:
          <input
            id="events-number"
            type="text"
            value={this.state.numberOfEvents}
            onChange={this.handleInputChanged}
          />
        </label>
      </div >
    )
  }

}

export default NumberOfEvents;
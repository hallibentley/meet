import React, { Component } from 'react';

class NumberOfEvents extends Component {

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(undefined, event.target.value);
  };

  render() {
    return (
      <div className="number-of-events">
        <label>
          Number of events:
          <input
            className="number-input"
            type="text"
            value={this.props.numberOfEvents}
            onChange={this.handleInputChanged}
          />
        </label>
      </div >
    )
  }

}

export default NumberOfEvents;
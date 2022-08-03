import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: '',
  };

  // handleInputChanged = (event) => {
  //   const value = event.target.value;
  //   this.setState({ numberOfEvents: value });
  //   this.props.updateEvents(undefined, event.target.value);
  // };

  handleInputChanged = (event) => {
    let inputValue = event.target.value;
    if (inputValue >= 33 || inputValue <= 0) {
      this.setState({
        numberOfEvents: inputValue,
        infoText: 'Please enter a number between 1 - 32.',
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        infoText: ' ',
      });
    }

    this.props.updateEvents(undefined, inputValue);
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
          <div>
            <ErrorAlert text={this.state.infoText} />
          </div>
        </label>
      </div >
    )
  }

}

export default NumberOfEvents;
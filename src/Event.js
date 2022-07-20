import React, { Component } from 'react';

class Event extends Component {

  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h3 className="title">{event.summary}</h3>
        <p className="start-time">{event.start.dateTime}</p>
        <p className="time-zone">{event.start.timeZone}</p>
        <p className="location">{event.location}</p>
        {!this.state.collapsed && (
          <p className="description">{event.description}</p>
        )}
        <button
          className="btn-details"
          onClick={this.handleClick}>
          Show Details
        </button>
      </div>
    )
  };
}

export default Event;
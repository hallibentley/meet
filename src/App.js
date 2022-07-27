import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends Component {

  state = {
    events: [],
    locations: [],
  }

  componentDidMount() {
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="app-header">
          <h1 className="app-title">Welcome to Meetup</h1>
          <h2 className="app-subtitle">Enter location below: </h2>
        </div>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents} />
        <NumberOfEvents />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;

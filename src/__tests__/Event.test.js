import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('render event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render event title', () => {
    expect(EventWrapper.find('.title')).toHaveLength(1);
  });

  test('render event start time', () => {
    expect(EventWrapper.find('.start-time')).toHaveLength(1);
  });

  test('render event time zone', () => {
    expect(EventWrapper.find('.time-zone')).toHaveLength(1);
  });

  test('render event location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('render show details button', () => {
    expect(EventWrapper.find('.btn-details')).toHaveLength(1);
  });

  test('expand event details on click', () => {
    EventWrapper.setState({ collapsed: true });
    EventWrapper.find('.btn-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('collapse event details on click', () => {
    EventWrapper.setState({ collapsed: false });
    EventWrapper.find('.btn-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('render event description when expanded', () => {
    EventWrapper.setState({ collapsed: false });
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });

});
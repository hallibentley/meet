import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />)
  });

  test('render text input field', () => {
    expect(NumberOfEventsWrapper.find('.number-input')).toHaveLength(1);
  });

  test('render default number in the input as 32', () => {
    expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(32);
  });

  test('render change the number of events in input field by changing state', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    });
    const eventObject = { target: { value: 6 } };
    NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(6);
  });


});
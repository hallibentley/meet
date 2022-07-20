import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />)
  });

  test('render text input field', () => {
    expect(NumberOfEventsWrapper.find('#events-number')).toHaveLength(1);
  });

  test('display number 10 for events by default', () => {
    expect(NumberOfEventsWrapper.find('#events-number').get(0).props.value).toEqual(10);
  });

  test('user can change the number of events', () => {
    NumberOfEventsWrapper.find('#events-number').simulate('change', {
      target: { value: 5 },
    });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(5);
  });

});
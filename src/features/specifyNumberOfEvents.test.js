import React from 'react';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';

import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;

  test('When user hasnt specified a number, 32 is the default number', ({ given, when, then }) => {

    given('user hasnt specified a preferred number of events', () => {
      // no code required because nothing has happened //
    });

    when('user views list of events', () => {
      AppWrapper = mount(<App />);
    });

    then('32 events will be displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {

    given('user desires to view a specific number of events', () => {
      AppWrapper = mount(<App />);
    });

    when('user chooses how many events they want to view', () => {
      AppWrapper.update();
      AppWrapper.find('.number-input').simulate('change', { target: 1 });
    });

    then('the number of events displayed reflects the request of the user', () => {
      expect(AppWrapper.find('.EventList')).toHaveLength(1);
    });

  });

});